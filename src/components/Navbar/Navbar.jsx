import React, { useState } from "react";
import { Layout, Menu, Button, Space, Typography, Dropdown } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  UserOutlined,
  MenuOutlined,
  HomeOutlined,
  TeamOutlined,
  ToolOutlined,
  ProjectOutlined,
  FileTextOutlined,
  ContactsOutlined,
  DownOutlined,
  BuildOutlined,
  SettingOutlined,
  FileProtectOutlined,
  BankOutlined,
  CarOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { Text } = Typography;

const ProfessionalNavbar = () => {
  const [current, setCurrent] = useState("home");
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  // About Us dropdown items
  const aboutUsItems = [
    {
      key: "about-history",
      label: <Link to="/about/history">History</Link>,
      // onClick: () => console.log('Navigate to History')
    },
    {
      key: "about-overview",
      label: <Link to="/about/over-view">About Overview</Link>,
      // onClick: () => console.log('Navigate to About Overview')
    },
    {
      key: "about-organization",
      label: (
        <Link to="/about/organization-structure">Organization Structure</Link>
      ),
      // onClick: () => console.log('Navigate to Organization')
    },
    {
      key: "address-phone",
      label: <Link to="/about/address">Address & Phone</Link>,
      // onClick: () => console.log('Navigate to Officers')
    },
  ];

  // Project/Works Report dropdown
  const projectWorksItems = [
    {
      key: "project-ongoing",
      label: <Link to="/about/history">History</Link>,
      // onClick: () => console.log('Navigate to Ongoing Projects')
    },
    {
      key: "project-completed",
      label: "Completed Projects",
      // onClick: () => console.log('Navigate to Completed Projects')
    },
    {
      key: "project-annual",
      label: "Annual Reports",
      // onClick: () => console.log('Navigate to Annual Reports')
    },
    {
      key: "project-progress",
      label: "Progress Reports",
      // onClick: () => console.log('Navigate to Progress Reports')
    },
  ];

  // Construction Work dropdown
  const constructionWorkItems = [
    {
      key: "construction-road",
      label: <Link to="/construction/roads">Roads Construction</Link>,
      // onClick: () => console.log('Navigate to Road Construction')
    },
    {
      key: "construction-building",
      label: <Link to="/construction/building">Buildings Construction</Link>,
      onClick: () => console.log("Navigate to Building Construction"),
    },
    // {
    //   key: 'construction-bridge',
    //   label: 'Bridge Construction',
    //   onClick: () => console.log('Navigate to Bridge Construction')
    // },
    // {
    //   key: 'construction-flyover',
    //   label: 'Flyover Construction',
    //   onClick: () => console.log('Navigate to Flyover Construction')
    // }
  ];

  // Maintenance Work dropdown
  // const maintenanceWorkItems = [
  //   {
  //     key: 'maintenance-routine',
  //     label: 'Routine Maintenance',
  //     onClick: () => console.log('Navigate to Routine Maintenance')
  //   },
  //   {
  //     key: 'maintenance-emergency',
  //     label: 'Emergency Repairs',
  //     onClick: () => console.log('Navigate to Emergency Repairs')
  //   },
  //   {
  //     key: 'maintenance-periodic',
  //     label: 'Periodic Maintenance',
  //     onClick: () => console.log('Navigate to Periodic Maintenance')
  //   }
  // ];

  // Litigation dropdown
  const litigationItems = [
    {
      key: "arbitration-cases",
      label: <Link to="/litigation/arbitration-cases">Arbritration Cases</Link>,
      // onClick: () => console.log("Navigate to Active Cases"),
    },
    {
      key: "court-cases",
      label: <Link to="/litigation/court-cases">Court Cases</Link>,
      onClick: () => console.log("Navigate to Resolved Cases"),
    },
    {
      key: "search-litigation-cases",
      label: <Link to="/litigation/search-litigation-cases">Search Any Litigation Cases</Link>,
      onClick: () => console.log("Navigate to Legal Notices"),
    },
  ];

  // Maintenance/Inventory dropdown
  const inventoryItems = [
    {
      key: "inventory-stock",
      label:<Link to="/inventory/roads-withpwd">Road With Pwd</Link>,
      // onClick: () => console.log("Navigate to Stock Management"),
    },
    {
      key: "Buildings",
      label: <Link to="/inventory/buildings">Buildings</Link>,
      // onClick: () => console.log("Navigate to Equipment Inventory"),
    },
    {
      key: "foot-over-bridges",
      label: <Link to="/inventory/foot-over-bridges">Foot Over Bridges</Link>,
      // onClick: () => console.log("Navigate to Materials Inventory"),
    },
  ];

  // Civic Services dropdown
  const civicServicesItems = [
    {
      key: "civic-complaints",
      label: <Link to="/civic-service/PWD-seva">PwD Seva - Complaint System</Link>,
      // onClick: () => console.log("Navigate to Public Complaints"),
    },
    {
      key: "civic-permits",
      label: <Link to="/inventory/community-centre">Community Centre / Park</Link>,
      // onClick: () => console.log("Navigate to Permits"),
    },
    // {
    //   key: "civic-utilities",
    //   label: "Utility Services",
    //   onClick: () => console.log("Navigate to Utility Services"),
    // },
  ];

  // Acts/Publication dropdown
  const actsPublicationItems = [
    {
      key: "delhi-govt",
      label: <Link to="/acts-rule/delhi-govt">Delhi Government</Link>,
      // onClick: () => console.log("Navigate to Acts & Rules"),
    },
    {
      key: "delhi-govt-orders",
      label:<Link to="/acts-rule/delhi-govt-orders">Delhi Government - Orders</Link>
      // onClick: () => console.log("Navigate to Notifications"),
    },
    {
      key: "cpwd-publications",
      label: <Link to="/acts-rule/cpwd-publications">CPWD Publications</Link>
      // onClick: () => console.log("Navigate to Circulars"),
    },
    {
      key: "Urban-Roads-manual",
      label: <Link to="/acts-rule/urban-roads-manual">PwD - Urban Roads Manual</Link>,
      // onClick: () => console.log("Navigate to Tender Documents"),
    },
  ];

  const handleMenuClick = (e) => {
    setCurrent(e.key);
  };

  // Custom dropdown menu style
  const dropdownMenuStyle = {
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    borderRadius: "6px",
    border: "none",
    minWidth: "200px",
  };

  return (
    <Layout>
      {/* Top Header with Contact Info */}
      <div
        style={{
          backgroundColor: "#0846aa",
          padding: "8px 24px",
          fontSize: "14px",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <Space size={24}>
            <Space>
              <PhoneOutlined />
              <Text style={{ color: "white" }}>Helpline: 1908 (Toll Free)</Text>
            </Space>
            <Space>
              <MailOutlined />
              <Text style={{ color: "white" }}>info@pwddelhi.gov.in</Text>
            </Space>
          </Space>
          <Text style={{ color: "white" }}>Government of NCT of Delhi</Text>
        </div>
      </div>

      {/* Main Navigation Header */}
      <Header
        style={{
          backgroundColor: "white",
          padding: "0 24px",
          // boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          height: "auto",
          lineHeight: "normal",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "12px 0",
          }}
        >
          {/* Logo Section */}
          <div
            style={{ display: "flex", alignItems: "center", minWidth: "300px" }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#0846aa",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "12px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                PWD
              </Text>
            </div>
            <div>
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#333",
                  lineHeight: "1.2",
                }}
              >
                Public Works Department
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#666",
                  lineHeight: "1.2",
                }}
              >
                Govt. of NCT of Delhi
              </div>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minWidth: "200px",
              justifyContent: "flex-end",
            }}
          >
            <Space>
              <Button
                icon={<UserOutlined />}
                onClick={() => console.log("Navigate to Login")}
                style={{
                  border: "2px solid #0846aa",
                  color: "#0846aa",
                  fontWeight: "600",
                  height: "40px",
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#0846aa";
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#0846aa";
                }}
              >
                Login
              </Button>
              <Button
                type="primary"
                onClick={() => console.log("Navigate to e-Services")}
                style={{
                  backgroundColor: "#0846aa",
                  borderColor: "#0846aa",
                  fontWeight: "600",
                  height: "40px",
                  borderRadius: "6px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#063d96";
                  e.target.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#0846aa";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                e-Services
              </Button>
            </Space>
          </div>

          {/* Mobile Menu Button */}
          <Button
            icon={<MenuOutlined />}
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
            style={{
              display: "none",
              "@media (max-width: 1200px)": {
                display: "block",
              },
            }}
          />
        </div>
      </Header>

      {/* Desktop Navigation Menu */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flex: 1,
          padding: 10,
          justifyContent: "center",
          "@media (max-width: 1200px)": {
            display: "none",
          },
        }}
      >
        <Space size={0} style={{ fontSize: "14px", fontWeight: "500" }}>
          {/* Home */}
          <Button
            type="text"
            icon={<HomeOutlined />}
            onClick={() => {
              setCurrent("home");
              console.log("Navigate to Home");
            }}
            style={{
              color: current === "home" ? "#0846aa" : "#333",
              fontWeight: current === "home" ? "600" : "500",
              height: "40px",
              padding: "0 16px",
              borderRadius: "6px",
              transition: "all 0.3s ease",
            }}
            className="nav-button"
          >
            Home
          </Button>

          {/* About Us Dropdown */}
          <Dropdown
            menu={{
              items: aboutUsItems,
              style: dropdownMenuStyle,
            }}
            trigger={["hover"]}
            placement="bottomCenter"
          >
            <Button
              type="text"
              icon={<TeamOutlined />}
              style={{
                color: "#333",
                fontWeight: "500",
                height: "40px",
                padding: "0 16px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              className="nav-button"
            >
              About Us{" "}
              <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
            </Button>
          </Dropdown>

          {/* Project/Works Report Dropdown */}
          <Dropdown
            menu={{
              items: projectWorksItems,
              style: dropdownMenuStyle,
            }}
            trigger={["hover"]}
            placement="bottomCenter"
          >
            <Button
              type="text"
              icon={<ProjectOutlined />}
              style={{
                color: "#333",
                fontWeight: "500",
                height: "40px",
                padding: "0 16px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              className="nav-button"
            >
              Project / Works Report{" "}
              <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
            </Button>
          </Dropdown>

          {/* Construction Work Dropdown */}
          <Dropdown
            menu={{
              items: constructionWorkItems,
              style: dropdownMenuStyle,
            }}
            trigger={["hover"]}
            placement="bottomCenter"
          >
            <Button
              type="text"
              icon={<BuildOutlined />}
              style={{
                color: "#333",
                fontWeight: "500",
                height: "40px",
                padding: "0 16px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              className="nav-button"
            >
              Construction Work{" "}
              <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
            </Button>
          </Dropdown>

          {/* Maintenance Work Dropdown */}
          {/* <Dropdown 
                menu={{ 
                  items: maintenanceWorkItems,
                  style: dropdownMenuStyle
                }}
                trigger={['hover']}
                placement="bottomCenter"
              >
                <Button 
                  type="text"
                  icon={<ToolOutlined />}
                  style={{
                    color: '#333',
                    fontWeight: '500',
                    height: '40px',
                    padding: '0 16px',
                    borderRadius: '6px',
                    transition: 'all 0.3s ease'
                  }}
                  className="nav-button"
                >
                  Maintenance Work <DownOutlined style={{ fontSize: '10px', marginLeft: '4px' }} />
                </Button>
              </Dropdown> */}

          {/* Litigation Dropdown */}
          <Dropdown
            menu={{
              items: litigationItems,
              style: dropdownMenuStyle,
            }}
            trigger={["hover"]}
            placement="bottomCenter"
          >
            <Button
              type="text"
              icon={<FileProtectOutlined />}
              style={{
                color: "#333",
                fontWeight: "500",
                height: "40px",
                padding: "0 16px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              className="nav-button"
            >
              Litigation{" "}
              <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
            </Button>
          </Dropdown>

          {/* Maintenance/Inventory Dropdown */}
          <Dropdown
            menu={{
              items: inventoryItems,
              style: dropdownMenuStyle,
            }}
            trigger={["hover"]}
            placement="bottomCenter"
          >
            <Button
              type="text"
              icon={<SettingOutlined />}
              style={{
                color: "#333",
                fontWeight: "500",
                height: "40px",
                padding: "0 16px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              className="nav-button"
            >
              Maintenance / Inventory{" "}
              <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
            </Button>
          </Dropdown>

          {/* Civic Services Dropdown */}
          <Dropdown
            menu={{
              items: civicServicesItems,
              style: dropdownMenuStyle,
            }}
            trigger={["hover"]}
            placement="bottomCenter"
          >
            <Button
              type="text"
              icon={<BankOutlined />}
              style={{
                color: "#333",
                fontWeight: "500",
                height: "40px",
                padding: "0 16px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              className="nav-button"
            >
              Civic Services{" "}
              <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
            </Button>
          </Dropdown>

          {/* Acts/Publication Dropdown */}
          <Dropdown
            menu={{
              items: actsPublicationItems,
              style: dropdownMenuStyle,
            }}
            trigger={["hover"]}
            placement="bottomCenter"
          >
            <Button
              type="text"
              icon={<FileTextOutlined />}
              style={{
                color: "#333",
                fontWeight: "500",
                height: "40px",
                padding: "0 16px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
              }}
              className="nav-button"
            >
              Acts / Publication{" "}
              <DownOutlined style={{ fontSize: "10px", marginLeft: "4px" }} />
            </Button>
          </Dropdown>

          {/* PWD Road Map */}
          {/* <Button 
                type="text"
                icon={<CarOutlined />}
                onClick={() => {
                  console.log('Navigate to PWD Road Map');
                }}
                style={{
                  color: '#333',
                  fontWeight: '500',
                  height: '40px',
                  padding: '0 16px',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                className="nav-button"
              >
                PWD Road Map
              </Button> */}

          {/* PWD Work Report */}
          <Button
            type="text"
            icon={<FileSearchOutlined />}
            onClick={() => {
              console.log("Navigate to PWD Work Report");
            }}
            style={{
              color: "#333",
              fontWeight: "500",
              height: "40px",
              padding: "0 16px",
              borderRadius: "6px",
              transition: "all 0.3s ease",
            }}
            className="nav-button"
          >
            PWD Work Report
          </Button>
        </Space>
      </div>

      <style jsx>{`
        .nav-button:hover {
          background-color: rgba(8, 70, 170, 0.1) !important;
          color: #0846aa !important;
          transform: translateY(-1px);
        }

        @media (max-width: 1200px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </Layout>
  );
};

export default ProfessionalNavbar;
