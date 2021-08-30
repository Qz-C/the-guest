import Logo from "../../assets/logos/logo.png";
import ExitToApp from "@material-ui/icons/ExitToApp";

const Header = ({ isAdmin, isFacility }) => {
  return (
    <>
      {isAdmin === true && isFacility === false ? (
        <header role="banner">
          <nav class="navbar navbar-dark bg-dark navbar-expand-md">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img
                  src={Logo}
                  alt="Back to homepage"
                  title="Back to homepage"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsing-navbar"
                aria-controls="collapsing-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="navbar-collapse justify-content-between collapse"
                id="collapsing-navbar"
              >
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a
                      class="nav-link"
                      href="/home"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/my-visits">
                      Visits
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/schedule-visits" class="nav-link">
                      Schedule a visit
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/create-account" class="nav-link">
                      Create New Account
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/profile" class="nav-link">
                      Profile
                    </a>
                  </li>
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item" style={{ marginBottom: 10 }}>
                    <ExitToApp />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      ) : isAdmin === false && isFacility === true ? (
        <header role="banner">
          <nav class="navbar navbar-dark bg-dark navbar-expand-md">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img
                  src={Logo}
                  alt="Back to homepage"
                  title="Back to homepage"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsing-navbar"
                aria-controls="collapsing-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="navbar-collapse justify-content-between collapse"
                id="collapsing-navbar"
              >
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="/home" aria-current="page">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/my-visits">
                      My Visits
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/schedule-visits" class="nav-link">
                      Schedule a visit
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/profile" class="nav-link">
                      Profile
                    </a>
                  </li>
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item" style={{ marginBottom: 10 }}>
                    <ExitToApp />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      ) : (
        <header role="banner">
          <nav class="navbar navbar-dark bg-dark navbar-expand-md">
            <div class="container">
              <a class="navbar-brand" href="#">
                <img
                  src={Logo}
                  alt="Back to homepage"
                  title="Back to homepage"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsing-navbar"
                aria-controls="collapsing-navbar"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div
                class="navbar-collapse justify-content-between collapse"
                id="collapsing-navbar"
              >
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="/home" aria-current="page">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/my-visits">
                      My Visits
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="/profile" class="nav-link">
                      Profile
                    </a>
                  </li>
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item" style={{ marginBottom: 10 }}>
                    <ExitToApp />
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

      )}
    </>
  );
};

export default Header;
