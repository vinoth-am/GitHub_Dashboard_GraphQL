import React from "react";
import {
  GoRepo,
  GoLocation,
  GoStar,
  GoGitBranch,
  GoPrimitiveDot
} from "react-icons/go";
import {
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardTitle,
  CardText,
  Input
} from "reactstrap";
import classnames from "classnames";

const navbarstyle = {
  color: "white",
  paddingRight: "15px",
  fontSize: "15px"
};

const headerContainer = {
  paddingLeft: "100px",
  marginTop: "50px",
  marginBottom: "50px"
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { repos, pinnedRepos, pinnedError, repoError } = this.props;
    const { repositoryOwner } = { ...pinnedRepos };
    const { itemShowcase } = { ...repositoryOwner };
    const { items } = { ...itemShowcase };
    const { edges } = { ...items };

    const { search } = { ...repos };
    const { edges: repoEdge } = { ...search };

    return (
      <Row>
        <Col>
          <div>
            <Navbar color="dark">
              <NavbarBrand style={{ color: "white" }} href="/">
                <Row form>
                  <Col md={1.4}>GitHub</Col>
                  <Col md={3}>
                    <Input type="text" placeholder="search" bsSize="sm" />
                  </Col>
                  <Col md={3}>
                    <a href="/" style={navbarstyle}>
                      Pull requests
                    </a>
                    <a href="/" style={navbarstyle}>
                      Issues
                    </a>
                    <a href="/" style={navbarstyle}>
                      Marketplace
                    </a>
                    <a href="/" style={navbarstyle}>
                      Explore
                    </a>
                  </Col>
                </Row>
              </NavbarBrand>

              <Nav style={{ align: "left" }}>
                <NavItem>
                  <NavLink style={{ color: "white" }} href="/components/">
                    Vinoth A M
                  </NavLink>
                </NavItem>
              </Nav>
            </Navbar>
          </div>

          <div style={headerContainer}>
            <Row>
              <Col sm="1">
                <img
                  src="https://avatars2.githubusercontent.com/u/698437?s=200"
                  alt="logo"
                  width="100px"
                />
              </Col>
              <Col sm="3">
                <p style={{ fontSize: "25px" }}>Airbnb</p>
                <Row style={{ paddingLeft: "15px" }}>
                  <p style={{ fontSize: "15px", paddingRight: "45px" }}>
                    <GoLocation />
                    San Francisco
                  </p>
                  <p style={{ fontSize: "15px" }}> https://airbnb.io</p>
                </Row>
              </Col>
            </Row>
          </div>

          <div style={{ paddingLeft: 100 }}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Repository
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Info
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <br />
                    <p>Pinned repositories</p>
                    <div>
                      {!pinnedError ? (
                        <Row>
                          {edges &&
                            edges.map((item, key) => (
                              <Col
                                key={key}
                                sm="4"
                                style={{ paddingBottom: "10px" }}
                              >
                                <Card body>
                                  <CardTitle>
                                    <GoRepo />{" "}
                                    <span style={{ color: "blue" }}>
                                      {" "}
                                      {item.node.name}
                                    </span>
                                    <p style={{ height: "40px" }}>
                                      {" "}
                                      {item.node.description}
                                    </p>
                                  </CardTitle>
                                  <CardText>
                                    <GoPrimitiveDot />
                                    {
                                      item.node.primaryLanguage.name
                                    } <GoStar /> {item.node.forkCount}{" "}
                                    <GoGitBranch />
                                    {item.node.stargazers.totalCount}
                                  </CardText>
                                </Card>
                              </Col>
                            ))}
                        </Row>
                      ) : (
                        <h1>Error :(</h1>
                      )}{" "}
                    </div>
                  </Col>
                </Row>

                <div style={{ paddingTop: 30 }}>
                  <h3>Repositories </h3>
                  {!repoError ? (
                    <div>
                      {repoEdge &&
                        repoEdge.map((repoItem, key) => (
                          <div key={key}>
                            <hr className="my-2" />
                            <p style={{ paddingTop: "20px", color: "blue" }}>
                              {repoItem.node.name}
                            </p>
                            {repoItem.node.description}
                            <br />
                            <GoStar /> {repoItem.node.forkCount} <GoGitBranch />
                            {repoItem.node.stargazers.totalCount}
                          </div>
                        ))}

                      <hr className="my-2" />
                    </div>
                  ) : (
                    <h1>Error :(</h1>
                  )}
                </div>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <p>
                    GitHub is an American company that provides hosting for
                    software development version control using Git. It is a
                    subsidiary of Microsoft, which acquired the company in 2018
                    for $7.5 billion.[4] It offers all of the distributed
                    version control and source code management (SCM)
                    functionality of Git as well as adding its own features. It
                    provides access control and several collaboration features
                    such as bug tracking, feature requests, task management, and
                    wikis for every project.[5] GitHub offers plans for free,
                    professional, and enterprise accounts.[6] Free GitHub
                    accounts are commonly used to host open source projects.[7]
                    As of January 2019, GitHub offers unlimited private
                    repositories to all plans, including free accounts.[8] As of
                    May 2019, GitHub reports having over 37 million users[9] and
                    more than 100 million repositories[10] (including at least
                    28 million public repositories),[11] making it the largest
                    host of source code in the world.[12]
                  </p>
                </Row>
              </TabPane>
            </TabContent>
          </div>
        </Col>
      </Row>
    );
  }
}
export default Home;
