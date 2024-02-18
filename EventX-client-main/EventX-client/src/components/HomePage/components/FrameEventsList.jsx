const FrameEventsList = () => {
  return (
    <section
      style={{
        width: "1390px",
        borderRadius: "30px",
        backgroundColor: "rgba(39, 183, 191, 0.07)",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "26px 36px 26px 63px",
        boxSizing: "border-box",
        gap: "105px",
        minHeight: "636px",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "36px",
        color: "#000",
        fontFamily: "Montserrat",
      }}
    >
      <div
        style={{
          height: "636px",
          width: "1390px",
          position: "relative",
          borderRadius: "30px",
          backgroundColor: "rgba(39, 183, 191, 0.07)",
          display: "none",
          maxWidth: "100%",
        }}
      />
      <img
        style={{
          width: "569px",
          position: "relative",
          maxHeight: "100%",
          overflow: "hidden",
          flexShrink: "0",
          maxWidth: "100%",
          zIndex: "1",
        }}
        alt=""
        src="/frame-1.svg"
      />
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "35px",
          minWidth: "401px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "289px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 14px 0px 0px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ flex: "1", position: "relative", zIndex: "1" }}>
            EventX
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "24px",
            fontFamily: "Poppins",
            textAlign: "justify",
            zIndex: "1",
          }}
        >
          <p style={{ margin: "" }}>
            EVENTX is an innovative platform that hosts a variety of technical
            events, including:
          </p>
          <ul
            style={{
              margin: "0",
              fontFamily: "inherit",
              fontSize: "inherit",
              paddingLeft: "32px",
            }}
          >
            <li style={{ marginBottom: "0px" }}>
              Debugging Challenges: Sharpen your problem-solving skills by
              tackling intricate bugs and glitches.
            </li>
            <li style={{ marginBottom: "0px" }}>
              Quiz Competitions: Test your knowledge across diverse domains and
              compete with fellow enthusiasts.
            </li>
            <li style={{ marginBottom: "0px" }}>
              Web Designing Showdowns: Unleash your creativity in designing
              captivating and user-friendly web interfaces.
            </li>
            <li>
              Future-Focused Implementations: Stay ahead of the curve by
              exploring cutting-edge technologies and their practical
              applications.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FrameEventsList;
