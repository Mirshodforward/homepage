import React from "react";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        background:
          "linear-gradient(120deg, #10131a 0%, #22304a 100%)",
        overflow: "hidden",
        position: "relative",
        fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          width: "100%",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          boxSizing: "border-box",
          borderBottom: "1px solid #232b3a",
          background: "rgba(16,19,26,0.92)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
        }}
      >
        <span
          style={{
            color: "#fff",
            fontWeight: 700,
            fontSize: "1.35rem",
            letterSpacing: "1px",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          StarsPaymee
        </span>
        <a
          href="https://starstg.uz/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#6a82fb",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "1rem",
            letterSpacing: "1px",
            transition: "color 0.2s",
          }}
          onMouseOver={e => (e.currentTarget.style.color = "#e52e71")}
          onMouseOut={e => (e.currentTarget.style.color = "#6a82fb")}
        >
          Bosh sahifa
        </a>
      </div>
      {/* Main content */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "rgba(22,28,40,0.98)",
            borderRadius: "20px",
            boxShadow: "0 8px 32px 0 rgba(34, 60, 120, 0.18)",
            border: "1.5px solid #232b3a",
            padding: "3.5rem 2.5rem 2.5rem 2.5rem",
            maxWidth: "400px",
            width: "90vw",
            textAlign: "center",
            marginTop: "64px",
            animation: "fadeInCard 1.1s cubic-bezier(.68,-0.55,.27,1.55)",
          }}
        >
          <h1
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              letterSpacing: "1.5px",
              marginBottom: "1.1rem",
              color: "#fff",
              textShadow: "0 2px 8px #10131a",
              lineHeight: 1.1,
            }}
          >
            Telegram Stars Xizmatlari
          </h1>
          <p
            style={{
              color: "#bfc9da",
              fontSize: "1.13rem",
              marginBottom: "2.1rem",
              lineHeight: 1.7,
              letterSpacing: "0.2px",
            }}
          >
            Telegram akkauntingiz uchun <b style={{ color: "#6a82fb" }}>yulduzlar</b>ni ishonchli va tezkor tarzda sotib oling. To‘lov va yetkazib berish avtomatik.
          </p>
          <a
            href="https://starstg.uz/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "1rem 2.5rem",
              fontSize: "1.08rem",
              color: "#fff",
              background: "linear-gradient(90deg, #22304a 0%, #10131a 100%)",
              border: "2px solid #6a82fb",
              borderRadius: "32px",
              fontWeight: 700,
              letterSpacing: "1px",
              textDecoration: "none",
              boxShadow: "0 2px 16px 0 rgba(106,130,251,0.10)",
              transition: "all 0.18s cubic-bezier(.68,-0.55,.27,1.55)",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseOver={e => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #6a82fb 0%, #e52e71 100%)";
              e.currentTarget.style.border = "2px solid #e52e71";
              e.currentTarget.style.boxShadow =
                "0 4px 32px 0 rgba(229,46,113,0.18)";
            }}
            onMouseOut={e => {
              e.currentTarget.style.background =
                "linear-gradient(90deg, #22304a 0%, #10131a 100%)";
              e.currentTarget.style.border = "2px solid #6a82fb";
              e.currentTarget.style.boxShadow =
                "0 2px 16px 0 rgba(106,130,251,0.10)";
            }}
          >
            Sotib olish
          </a>
        </div>
      </div>
      {/* Animatsiya uchun style */}
      <style>
        {`
          @keyframes fadeInCard {
            0% { opacity: 0; transform: scale(0.96) translateY(40px);}
            100% { opacity: 1; transform: scale(1) translateY(0);}
          }
        `}
      </style>
    </div>
  );
}

export default Home;

