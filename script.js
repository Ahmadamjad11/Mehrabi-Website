(() => {
  const cfg = window.MEHRABI_CONFIG || {};
  const html = document.documentElement;
  const body = document.body;
  let language = "ar";
  const toggle = document.getElementById("languageToggle");

  function setLanguage(next) {
    language = next;
    const isArabic = next === "ar";
    html.lang = next;
    html.dir = isArabic ? "rtl" : "ltr";
    body.dir = html.dir;
    document.querySelectorAll("[data-ar][data-en]").forEach((el) => {
      el.innerHTML = el.dataset[next];
    });
    toggle.textContent = isArabic ? "EN" : "ع";
    document.title = isArabic ? "محرابي | الموقع الرسمي" : "Mehrabi | Official Website";
  }

  toggle.addEventListener("click", () => setLanguage(language === "ar" ? "en" : "ar"));
  const apk = cfg.apkUrl || "";
  ["apkButton", "bottomApkButton"].forEach((id) => {
    const button = document.getElementById(id);
    if (apk) button.href = apk;
    else {
      button.href = "#";
      button.addEventListener("click", (event) => {
        event.preventDefault();
        alert(language === "ar" ? "سيتم إضافة رابط تحميل النسخة قريباً." : "The APK download link will be added soon.");
      });
    }
  });

  const version = document.getElementById("versionLabel");
  if (cfg.version) version.textContent = `Android · ${cfg.version}${cfg.apkSize ? " · " + cfg.apkSize : ""}`;
  if (cfg.privacyUrl) document.getElementById("privacyLink").href = cfg.privacyUrl;
  if (cfg.contactUrl) document.getElementById("contactLink").href = cfg.contactUrl;
  if (cfg.googlePlayUrl) {
    const play = document.getElementById("playLink");
    play.href = cfg.googlePlayUrl;
    play.classList.remove("hidden");
  }

  // AdSense integration: only enable after site approval and adding real publisher/slot IDs.
  if (cfg.adsenseClient && cfg.adsenseSlots && cfg.adsenseSlots.top && cfg.adsenseSlots.bottom) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(cfg.adsenseClient)}`;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);
    // Replace the visual placeholders with AdSense units after approval.
    document.querySelectorAll(".ad-slot").forEach((slot, index) => {
      slot.innerHTML = "";
      const ins = document.createElement("ins");
      ins.className = "adsbygoogle";
      ins.style.display = "block";
      ins.dataset.adClient = cfg.adsenseClient;
      ins.dataset.adSlot = index === 0 ? cfg.adsenseSlots.top : cfg.adsenseSlots.bottom;
      ins.dataset.adFormat = "auto";
      ins.dataset.fullWidthResponsive = "true";
      slot.appendChild(ins);
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
  setLanguage("ar");
})();