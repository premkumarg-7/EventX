import FrameComponent from "./components/FrameComponent";
import FrameAdmin from "./components/FrameAdmin";
import FrameRectangleFrame from "./components/FrameRectangleFrame";
import FrameEventsList from "./components/FrameEventsList";

const Desktop = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0px 0px 600px",
        boxSizing: "border-box",
        letterSpacing: "normal",
      }}
    >
      {/* <NavBar /> */}
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 122px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "right",
          fontSize: "350.1px",
          color: "#000",
          fontFamily: "'Inria Sans'",
        }}
      >
        <div
          style={{
            flex: "1",
            backgroundColor: "#fff",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            padding: "236px 0px",
            boxSizing: "border-box",
            position: "relative",
            maxWidth: "100%",
            zIndex: "1",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              margin: "0",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
              objectFit: "cover",
              mixBlendMode: "color-burn",
            }}
            loading="eager"
            alt=""
            src="/noise@2x.png"
          />
          <div
            style={{
              height: "1470px",
              width: "1611px",
              position: "absolute",
              margin: "0",
              bottom: "-334px",
              left: "-476px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "784px",
                left: "925px",
                borderRadius: "50%",
                backgroundColor: "#2b88d9",
                filter: "blur(400px)",
                width: "686px",
                height: "686px",
                zIndex: "1",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "1076.65px",
                left: "379.1px",
                borderRadius: "50%",
                background: "linear-gradient(91.07deg, #00a6ff, #48ffbe)",
                filter: "blur(400px)",
                width: "784.5px",
                height: "191.2px",
                transform: " rotate(-21.88deg)",
                transformOrigin: "0 0",
                zIndex: "2",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "552.03px",
                left: "0px",
                borderRadius: "50%",
                backgroundColor: "#d49dff",
                filter: "blur(400px)",
                width: "1403px",
                height: "597px",
                transform: " rotate(-23.17deg)",
                transformOrigin: "0 0",
                zIndex: "3",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "112px",
                left: "476px",
                borderRadius: "50%",
                backgroundColor: "rgba(137, 96, 255, 0.56)",
                filter: "blur(300px)",
                width: "378px",
                height: "429px",
                zIndex: "4",
              }}
            />
          </div>
          <b
            style={{
              height: "377px",
              width: "1343px",
              position: "relative",
              letterSpacing: "-0.04em",
              lineHeight: "112%",
              display: "inline-block",
              flexShrink: "0",
              mixBlendMode: "overlay",
              maxWidth: "100%",
              boxSizing: "border-box",
              paddingRight: "20px",
              zIndex: "5",
            }}
          >
            Skill shot
          </b>
        </div>
      </section>
      <section
        style={{
          width: "1190px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "0px 20px 191px",
          boxSizing: "border-box",
          gap: "100px",
          maxWidth: "100%",
        }}
      >
        <FrameComponent />
        <FrameAdmin />
        <div
          style={{
            width: "1008px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 30px 0px 0px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "57px",
              maxWidth: "100%",
            }}
          >
            <FrameRectangleFrame />
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "28px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  height: "537px",
                  width: "287px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "64px 7px 0px 0px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
                    position: "relative",
                    borderRadius: "30px",
                    maxWidth: "100%",
                    overflow: "hidden",
                    maxHeight: "100%",
                  }}
                  loading="eager"
                  alt=""
                  src="/rectangle-8.svg"
                />
              </div>
              <div
                style={{
                  height: "601px",
                  flex: "1",
                  position: "relative",
                  borderRadius: "30px",
                  background:
                    "linear-gradient(180deg, #7632ce, rgba(134, 49, 186, 0.82) 61.5%, rgba(166, 49, 185, 0.92))",
                  minWidth: "231px",
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  height: "537px",
                  width: "280px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "64px 0px 0px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
                    position: "relative",
                    borderRadius: "30px",
                    background:
                      "linear-gradient(180deg, #7632ce, rgba(134, 49, 186, 0.82) 61.5%, rgba(166, 49, 185, 0.92))",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <FrameEventsList />
    </div>
  );
};

export default Desktop;
