import React from 'react';
import { Button, Card, Space, Typography, Row, Col, Statistic } from 'antd';
import { 
  TrophyOutlined, 
  FileTextOutlined, 
  TeamOutlined, 
  UserOutlined, 
  CalendarOutlined,
  DollarOutlined,
  ArrowRightOutlined,
  LaptopOutlined,
  DownOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const HeroSection = () => {
  const statsData = [
    {
      icon: <FileTextOutlined style={{ fontSize: '24px', color: 'white' }} />,
      title: '10,000+',
      subtitle: 'Infrastructure Projects'
    },
    {
      icon: <TeamOutlined style={{ fontSize: '24px', color: 'white' }} />,
      title: '2.5 Crore',
      subtitle: 'Citizens Served'
    },
    {
      icon: <UserOutlined style={{ fontSize: '24px', color: 'white' }} />,
      title: '50+ Years',
      subtitle: 'Of Excellence'
    },
    {
      icon: <DollarOutlined style={{ fontSize: '24px', color: 'white' }} />,
      title: '₹15,000 Cr',
      subtitle: 'Annual Budget'
    }
  ];

  return (
    <div style={{
      background: 'linear-gradient(135deg, #0846aa 0%, #1e5bb8 100%)',
      minHeight: '80vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        opacity: 0.1
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 24px',
        position: 'relative',
        zIndex: 1
      }}>
        <Row gutter={[48, 48]} align="middle">
          {/* Left Content */}
          <Col xs={24} lg={14}>
            <div style={{ color: 'white' }}>
              <Text style={{ 
                color: 'rgba(255,255,255,0.9)', 
                fontSize: '16px',
                fontWeight: '500',
                letterSpacing: '0.5px'
              }}>
                Government of NCT of Delhi
              </Text>
              
              <Title level={1} style={{ 
                color: 'white', 
                fontSize: '48px',
                fontWeight: 'bold',
                marginTop: '16px',
                marginBottom: '8px',
                lineHeight: '1.2'
              }}>
                Building Delhi's
              </Title>
              
              <Title level={1} style={{ 
                color: '#FFD700', 
                fontSize: '48px',
                fontWeight: 'bold',
                marginTop: '0',
                marginBottom: '24px',
                lineHeight: '1.2'
              }}>
                Future Together
              </Title>

              <Paragraph style={{ 
                color: 'rgba(255,255,255,0.9)', 
                fontSize: '18px',
                lineHeight: '1.6',
                marginBottom: '16px',
                maxWidth: '500px'
              }}>
                Public Works Department is Delhi's premier agency for planning, 
                designing, construction and maintenance of government assets in built 
                environment and infrastructure development.
              </Paragraph>

              <Paragraph style={{ 
                color: 'rgba(255,255,255,0.8)', 
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '32px',
                maxWidth: '500px'
              }}>
                लोक निर्माण विभाग दिल्ली सरकार की प्रमुख एजेंसी है जो निर्मित पर्यावरण और अवसंरचना विकास के 
                निर्माण में सरकारी संपत्तियों की योजना, डिजाइन, निर्माण और रखरखाव के लिए जिम्मेदार है।
              </Paragraph>

              <Space size={16}>
                <Button 
                  size="large"
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'white',
                    color: '#0846aa',
                    fontWeight: '600',
                    height: '48px',
                    paddingLeft: '24px',
                    paddingRight: '24px'
                  }}
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Explore Services
                </Button>
                <Button 
                  size="large"
                  style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: '600',
                    height: '48px',
                    paddingLeft: '24px',
                    paddingRight: '24px'
                  }}
                >
                  View Projects
                </Button>
              </Space>
            </div>
          </Col>

          {/* Right Content */}
          <Col xs={24} lg={10}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Excellence Award Card */}
              <Card style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: 'none',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <TrophyOutlined style={{ fontSize: '24px', color: '#FFD700' }} />
                  <div>
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: '16px' }}>
                      Excellence Award
                    </Text>
                    <br />
                    <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                      Best Infrastructure 2023
                    </Text>
                  </div>
                </div>
              </Card>

              {/* Delhi Infrastructure Showcase */}
              <Card style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: 'none',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                padding: '24px'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px'
                  }}>
                    <FileTextOutlined style={{ fontSize: '28px', color: 'white' }} />
                  </div>
                  <Text style={{ 
                    color: 'white', 
                    fontWeight: '600', 
                    fontSize: '16px',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Delhi Infrastructure Showcase
                  </Text>
                </div>
              </Card>

              {/* Digital First Card */}
              <Card style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                border: 'none',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <LaptopOutlined style={{ fontSize: '24px', color: '#FFD700' }} />
                  <div>
                    <Text style={{ color: 'white', fontWeight: '600', fontSize: '16px' }}>
                      Digital First
                    </Text>
                    <br />
                    <Text style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>
                      Online Services
                    </Text>
                  </div>
                </div>
              </Card>
            </div>
          </Col>
        </Row>

        {/* Statistics Section */}
        {/* <Row gutter={[32, 32]} style={{ marginTop: '80px' }}>
          {statsData.map((stat, index) => (
            <Col xs={12} sm={12} lg={6} key={index}>
              <Card style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '12px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ marginBottom: '16px' }}>
                  {stat.icon}
                </div>
                <Title level={3} style={{ 
                  color: 'white', 
                  marginBottom: '8px',
                  fontSize: '24px',
                  fontWeight: 'bold'
                }}>
                  {stat.title}
                </Title>
                <Text style={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  {stat.subtitle}
                </Text>
              </Card>
            </Col>
          ))}
        </Row> */}

        {/* Scroll Indicator */}
        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '2px solid rgba(255,255,255,0.5)',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            <DownOutlined style={{ color: 'white', fontSize: '16px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;