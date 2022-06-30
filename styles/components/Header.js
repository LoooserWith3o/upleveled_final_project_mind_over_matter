export default () => (
  <div>
    <header>
      <img src={logoImage} alt="logo" id="logoImage" />
    </header>
    <h1>My Games Page</h1>
    <style jsx global>{`
      header {
        background-color: grey;
        height: 80px;
        text-align: center;
        padding: 10px;
      }
      #logoImage {
        height: 60px;
      }
      h1 {
        text-align: center;
        font-size: 40px;
        margin: 10px;
      }
    `}</style>
  </div>
);
