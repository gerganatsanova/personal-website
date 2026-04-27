"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

// The email is stored as character codes so the literal string never appears
// anywhere in the static markup or the JS bundle. Naive scrapers that look
// for plain "name@domain.tld" patterns will not find it.
// To change the address, update the two arrays below.
const LOCAL_CODES = [
  116, 115, 97, 110, 111, 118, 97, 46, 99, 111, 110, 115, 117, 108, 116, 105,
  110, 103,
];
const DOMAIN_CODES = [103, 109, 97, 105, 108, 46, 99, 111, 109];

function decode(codes: readonly number[]): string {
  return String.fromCharCode(...codes);
}

export function useObfuscatedEmail(subject?: string) {
  const [ready, setReady] = useState(false);

  // Decode email only after client mount so the address is never in SSR HTML.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setReady(true), []);

  const email = useMemo(
    () =>
      ready
        ? `${decode(LOCAL_CODES)}${String.fromCharCode(64)}${decode(
            DOMAIN_CODES,
          )}`
        : null,
    [ready],
  );

  const href = useMemo(() => {
    if (!email) return undefined;
    const base = `${String.fromCharCode(109, 97, 105, 108, 116, 111, 58)}${email}`;
    return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
  }, [email, subject]);

  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    },
    [],
  );

  const copy = useCallback(() => {
    if (!email) return;
    const showToast = () => {
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2200);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(email).then(showToast).catch(() => {});
    } else {
      // Legacy fallback
      try {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        showToast();
      } catch {}
    }
  }, [email]);

  return { email, href, ready, copy, copied };
}
