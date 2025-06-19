 function setupHover(triggerId, previewId) {
  const trigger = document.getElementById(triggerId);
  const preview = document.getElementById(previewId);

  if (!trigger || !preview) return;

  trigger.addEventListener("mouseenter", () => preview.classList.add("show"));
  trigger.addEventListener("mouseleave", () => preview.classList.remove("show"));
  preview.addEventListener("mouseenter", () => preview.classList.add("show"));
  preview.addEventListener("mouseleave", () => preview.classList.remove("show"));
}

document.addEventListener("DOMContentLoaded", () => {
  setupHover("hoverReports", "reportsElements");
  setupHover("hoverForecasts", "forecastsElements");
  setupHover("hoverDashboards", "dashboardElements");
  setupHover("hoverConsolidations", "consolidationsElements");
});
