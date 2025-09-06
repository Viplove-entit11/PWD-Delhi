import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { 
  FileTextOutlined, 
  TeamOutlined, 
  EnvironmentOutlined,
  TrophyOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const AboutPWD = () => {
  const statsData = [
    {
      icon: <FileTextOutlined style={{ fontSize: '32px', color: '#0846aa' }} />,
      title: '500+',
      subtitle: 'Active Projects',
      bgColor: '#e6f4ff'
    },
    {
      icon: <TeamOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
      title: '5000+',
      subtitle: 'Employees',
      bgColor: '#f6ffed'
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: '32px', color: '#fa8c16' }} />,
      title: '11',
      subtitle: 'Districts Covered',
      bgColor: '#fff7e6'
    },
    {
      icon: <TrophyOutlined style={{ fontSize: '32px', color: '#fadb14' }} />,
      title: '50+',
      subtitle: 'Years Experience',
      bgColor: '#feffe6'
    }
  ];

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '80px 24px',
      minHeight: '60vh'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '60px',
          maxWidth: '800px',
          margin: '0 auto 60px'
        }}>
          <Title level={2} style={{ 
            color: '#333',
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '24px'
          }}>
            About PWD Delhi
          </Title>
          <Paragraph style={{ 
            fontSize: '18px',
            color: '#666',
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            The Public Works Department is the cornerstone of Delhi's infrastructure development,
            committed to building a better tomorrow for all citizens.
          </Paragraph>
        </div>

        {/* Statistics Cards */}
        <Row gutter={[32, 32]} justify="center">
          {statsData.map((stat, index) => (
            <Col xs={24} sm={12} md={12} lg={6} key={index}>
              <Card 
                hoverable
                style={{
                  textAlign: 'center',
                  borderRadius: '16px',
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  height: '200px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease'
                }}
                bodyStyle={{
                  padding: '32px 24px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  backgroundColor: stat.bgColor,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  transition: 'transform 0.3s ease'
                }}>
                  {stat.icon}
                </div>
                
                <Title level={2} style={{ 
                  color: '#333',
                  marginBottom: '8px',
                  fontSize: '32px',
                  fontWeight: 'bold',
                  lineHeight: '1.2'
                }}>
                  {stat.title}
                </Title>
                
                <Text style={{ 
                  color: '#666',
                  fontSize: '16px',
                  fontWeight: '500'
                }}>
                  {stat.subtitle}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Description */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '60px auto 0'
        }}>
          <Row gutter={[48, 32]}>
            <Col xs={24} md={12}>
              <Paragraph style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.7',
                textAlign: 'left'
              }}>
                As the premier government agency for infrastructure development in India, PWD Delhi 
                has been setting benchmarks in construction excellence and citizen-centric service delivery 
                for over five decades.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Paragraph style={{
                fontSize: '16px',
                color: '#666',
                lineHeight: '1.7',
                textAlign: 'left'
              }}>
                Our commitment extends beyond mere construction - we focus on sustainable development, 
                innovative engineering solutions, and creating infrastructure that serves the growing 
                needs of Delhi's citizens.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AboutPWD;