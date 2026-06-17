import type { Lang } from "@/lib/i18n";
import { t } from "@/lib/translations";

export function getExperienceMetrics(lang: Lang) {
  return [
    {
      value: t.metrics.featuredValue[lang],
      label: t.metrics.featuredLabel[lang],
    },
    {
      value: t.metrics.participantsValue[lang],
      label: t.metrics.participantsLabel[lang],
    },
    {
      value: t.metrics.projectsValue[lang],
      label: t.metrics.projectsLabel[lang],
    },
    {
      value: t.metrics.trainingsValue[lang],
      label: t.metrics.trainingsLabel[lang],
    },
    {
      value: t.metrics.modulesValue[lang],
      label: t.metrics.modulesLabel[lang],
    },
    {
      value: t.metrics.coachingValue[lang],
      label: t.metrics.coachingLabel[lang],
    },
  ];
}
