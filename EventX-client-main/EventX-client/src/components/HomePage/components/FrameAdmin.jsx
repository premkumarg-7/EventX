const FrameAdmin = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "180px 80px 180px 76px",
        boxSizing: "border-box",
        position: "relative",
        minHeight: "598px",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "36px",
        color: "#722dca",
        fontFamily: "Raleway",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          margin: "0",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          borderRadius: "87px",
          backgroundColor: "rgba(238, 204, 255, 0.43)",
        }}
      />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          position: "relative",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            height: "518px",
            width: "704px",
            margin: "0",
            position: "absolute",
            top: "-209px",
            left: "115px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "98px 20px",
            boxSizing: "border-box",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              margin: "0",
              top: "0px",
              right: "7px",
              bottom: "0px",
              left: "0px",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "contain",
              zIndex: "1",
            }}
            loading="eager"
            alt=""
            src="/frame@2x.png"
          />
          <b
            style={{
              height: "65px",
              position: "relative",
              display: "inline-block",
              zIndex: "2",
            }}
          >
            THE SITE
          </b>
        </div>
        <div
          style={{
            height: "196px",
            flex: "1",
            position: "relative",
            fontSize: "32px",
            fontFamily: "Questrial",
            color: "#000",
            textAlign: "justify",
            display: "inline-block",
            maxWidth: "100%",
            zIndex: "2",
          }}
        >
          Technical events involve technology like engineering, computing, and
          robotics, offering competitions, workshops, seminars, and exhibitions
          for participants to showcase skills, learn new things, and network.
          Examples include coding quizzes, debugging contests, web designing
          workshops, and project expos, where participants showcase innovative
          projects and receive feedback from experts and peers.
        </div>
      </div>
    </div>
  );
};

export default FrameAdmin;
