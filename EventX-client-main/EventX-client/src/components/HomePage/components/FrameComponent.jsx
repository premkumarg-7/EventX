import { Link } from "react-router-dom";
const FrameComponent = () => {
  return (
    <div
      style={{
        width: "900px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 0px 0px 0px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "center",
        fontSize: "28px",
        color: "#fff",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "50px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            width: "416px",
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
              flex: "1",
              borderRadius: "38px",
              backgroundColor: "#2b88d9",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "58px 38px 56px 40px",
              boxSizing: "border-box",
              maxWidth: "100%",
              zIndex: "1",
            }}
          >
            <div
              style={{
                height: "172px",
                width: "416px",
                position: "relative",
                borderRadius: "38px",
                backgroundColor: "#2b88d9",
                display: "none",
                maxWidth: "100%",
              }}
            />
            <div
              style={{
                height: "48px",
                flex: "1",
                position: "relative",
                display: "inline-block",
                maxWidth: "100%",
                zIndex: "2",
                textDecoration:"none"
              }}
            >
            
              <Link to={"/login"}
              style={{textDecoration:"none",
              color:"white"
            }}>Admin</Link>
              
            </div>
          </div>
        </div>
        <div
          style={{
            width: "416px",
            borderRadius: "38px",
            backgroundColor: "#2cc3a9",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "58px 44px 56px 34px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              height: "172px",
              width: "416px",
              position: "relative",
              borderRadius: "38px",
              backgroundColor: "#2cc3a9",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <div
            style={{
              height: "48px",
              flex: "1",
              position: "relative",
              display: "inline-block",
              maxWidth: "100%",
              zIndex: "1",
            }}
          >
            <Link to={"/quiz-stepper"}
             style={{textDecoration:"none",
             color:"white"}}>
             Partcipant</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
