/**
 * 🎭 DASHBOARD SHOWCASE - THEATRE PRESENTATION
 * Dramatic stage-like presentation with spotlight
 */

import { motion } from "framer-motion";
import { useTranslation } from "@/i18n";
import { DashboardDemoShowcase } from "@/components/dashboard/demo";
import { useState, useEffect, useRef } from "react";

const DashboardShowcaseSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);

  // Calculate dashboard scale
  const calculateScale = () => {
    const width = window.innerWidth;
    if (width >= 1680) return 0.95;
    if (width >= 1440) return 0.8;
    if (width >= 1280) return 0.7;
    if (width >= 1024) return 0.6;
    if (width >= 768) return 0.5;
    if (width >= 480) return 0.32;
    return 0.28;
  };

  const [dashboardScale, setDashboardScale] = useState(calculateScale);
  const [isDemoVisible, setIsDemoVisible] = useState(false);
  const [shouldPlayDemo, setShouldPlayDemo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDashboardScale(calculateScale());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDemoVisible(true);
          setShouldPlayDemo(true);
        } else {
          setShouldPlayDemo(false);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="live-demo"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white flex items-center justify-center py-20 pb-32"
      ref={sectionRef}
    >
      {/* Subtle purple gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.08), transparent 60%)",
        }}
      ></div>

      <div className="relative w-full mx-auto px-6 md:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-purple-50 border-2 border-purple-200 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-bold text-purple-900">
                LIVE DEMO
              </span>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-4">
            {t("marketing.dashboardShowcase.title")}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t("marketing.dashboardShowcase.subtitle")}
          </p>
        </motion.div>

        {/* DASHBOARD ON STAGE */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full flex justify-center items-start"
        >
          {/* Outer container with actual scaled size */}
          <div 
            className="relative"
            style={{
              width: `${1600 * dashboardScale}px`,
              height: `${910 * dashboardScale}px`,
            }}
          >
            {/* Stage "floor" glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full h-40 bg-gradient-to-t from-purple-500/20 via-purple-500/10 to-transparent blur-3xl"></div>

            {/* Scale wrapper - scales everything inside */}
            <div
              style={{
                transform: `scale(${dashboardScale})`,
                transformOrigin: "top left",
                width: "1600px",
                height: "910px",
                position: "relative",
              }}
            >
            {/* Browser Chrome - Premium Style - FIXED CORNERS! */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute h-10 bg-gradient-to-b from-gray-800 to-gray-700 flex items-center px-4 gap-3"
              style={{
                width: "1600px",
                top: 0,
                left: 0,
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                borderTop: "1px solid rgb(75, 85, 99)",
                borderLeft: "1px solid rgb(75, 85, 99)",
                borderRight: "1px solid rgb(75, 85, 99)",
              }}
            >
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-gray-900/50 backdrop-blur-sm px-4 py-1 rounded-lg border border-gray-600">
                  <span className="text-xs text-gray-400 font-mono">
                    app.replainow.com
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Dashboard Container - PROFESSIONAL SHADOW */}
            <div
              className="dashboard-zoom-wrapper"
              style={{
                position: "absolute",
                top: "10px",
                left: 0,
                width: "1600px",
                height: "900px",
                filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))",
              }}
            >
              {isDemoVisible ? (
                <DashboardDemoShowcase
                  autoPlay={shouldPlayDemo}
                  loop={shouldPlayDemo}
                />
              ) : (
                <div
                  className="demo-placeholder"
                  style={{
                    width: "1600px",
                    height: "900px",
                    background:
                      "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  Loading demo...
                </div>
              )}
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardShowcaseSection;
