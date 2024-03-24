import CustomLink from "../components/CustomLink";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <CustomLink text={"Help"} />
        <CustomLink text={"Orders & Returns"} />
        <CustomLink text={"Hi,John"} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h1>ECOMMERCE</h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CustomLink text={"Categories"} />
          <CustomLink text={"Sale"} />
          <CustomLink text={"Clearance"} />
          <CustomLink text={"New Stock"} />
          <CustomLink text={"Trending"} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <CustomLink text={"Search"} />
          <CustomLink text={"Cart"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
