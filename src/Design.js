
const Design = () => {
    return (
      <>
        <nav id="this-tab-set" className="radio-tabs">
          <input key={"1"} id="tab-1" type="radio" name="tabs" />
          <label htmlFor="tab-1" style={{ background: "rgba(0, 0, 0, 0)" }}>
            Nhà Đất Bán
          </label>
  
          <input key={"2"} id="tab-2" type="radio" name="tabs" />
          <label
            style={{
              color: "grey",
              backgroundColor: "rgba(255,255,255,0.9)",
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
            }}
          >
            Nhà Đất Cho Thuê
          </label>
          <input key={"4"} id="tab-3" type="radio" name="tabs" />
          <label
            style={{
              color: "grey",
              background: "rgba(255,255,255,0.9)",
              borderTopLeftRadius: 2,
              borderTopRightRadius: 2,
            }}
          >
            Dự Án
          </label>
          <div
            className="tab-1-display"
            style={{ background: "transparent", padding: 10 }}
          >
            <div
              className="container A"
              style={{
                background: "white",
                width: "100%",
                height: "fit-content",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                padding: "0",
                borderRadius: "5px",
                marginBottom: 10,
              }}
            >
              <nav
                style={{
                  background: "white",
                  width: "fit-content",
                  height: "40px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 5,
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              >
                <span>🏠</span>
                <ul style={{ margin: 0, marginLeft: 5 }}>
                  <li>
                    <a href="#">
                      Simple philosophies<div id="down-triangle"></div>
                    </a>
                  </li>
                </ul>
              </nav>
              <input
              key={"12"}
                style={{
                  background: "white",
                  height: "40px",
                  border: "none",
                  width: "256px",
                }}
                type="text"
                placeholder="Tìm kiếm địa điểm, khu vực"
              ></input>
  
              <button
                style={{
                  color: "white",
                  background: "#DA604B",
                  border: "none",
                  borderRadius: "5px",
                  width: "90px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <span>🔍</span>Tìm kiếm
              </button>
            </div>
            <div
              className="container"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              {[
                "Trên toàn quốc",
                "Mức giá",
                "Diện tích",
                "Dự án",
                "Mở rộng",
                "",
              ].map((item, index) => (
                <nav
                    key={index}
                  style={{
                    width: "fit-content",
                    height: "20px",
                    display: "flex",
                    marginTop: "20px",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 5,
                    border:
                      index === 4 || index === 5 ? "none" : "1px solid #ccc",
                    borderRadius: "5px",
                    margin: "5px",
                    marginLeft: "5px",
                  }}
                >
                  <ul style={{ margin: 0, width: 20 }}>
                    <li
                      style={{ width: index === 4 ? 100 : index === 5 ? 0 : 150 }}
                    >
                      <a href="#" style={{ color: "white" }}>
                        {index === 5 ? <span>🔄</span> : item}
                        {index !== 5 ? <div id="down-triangle"></div> : false}
                      </a>
                      {index !== 5 &&  index !== 4 ? (
                        <ul>
                          <li>ABC</li>
                        </ul>
                      ) : (
                        false
                      )}
                    </li>
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </nav>
      </>
    );
  };

  export default Design;