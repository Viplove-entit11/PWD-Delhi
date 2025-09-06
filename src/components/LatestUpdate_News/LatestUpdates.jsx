import React from 'react';
import { Card, Row, Col, Typography, Button, Badge, List, Divider } from 'antd';
import { 
  FileTextOutlined,
  GlobalOutlined,
  FileProtectOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  EyeOutlined,
  LinkOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const LatestUpdates = () => {
  const importantInformation = [
    {
      id: 1,
      badge: 'Urgent',
      badgeColor: '#ff4d4f',
      icon: <FileTextOutlined style={{ fontSize: '20px', color: '#1890ff' }} />,
      title: 'Special Drive to fill up Pot Holes on PWD Roads',
      description: 'Comprehensive initiative to repair and maintain road infrastructure across Delhi',
      category: 'Infrastructure',
      categoryColor: '#1890ff',
      date: '15/1/2024',
      hasReadMore: true,
      hasVisitPortal: false
    },
    {
      id: 2,
      badge: 'New',
      badgeColor: '#52c41a',
      icon: <GlobalOutlined style={{ fontSize: '20px', color: '#52c41a' }} />,
      title: 'Launch of Sarkari Awas web portal for Allotment of Government Accommodation',
      description: 'New online platform for government accommodation allotment process',
      category: 'Digital Services',
      categoryColor: '#52c41a',
      date: '12/1/2024',
      hasReadMore: true,
      hasVisitPortal: true
    },
    {
      id: 3,
      badge: 'Policy',
      badgeColor: '#722ed1',
      icon: <FileProtectOutlined style={{ fontSize: '20px', color: '#722ed1' }} />,
      title: 'PWD Delhi Flood Control Order 2025',
      description: 'New guidelines and protocols for flood management and control measures',
      category: 'Policy',
      categoryColor: '#722ed1',
      date: '8/1/2024',
      hasReadMore: true,
      hasVisitPortal: false
    }
  ];

  const recentUpdates = [
    {
      title: 'Street Light Inspection Drive',
      subtitle: 'Maintenance',
      date: '20/1/2024'
    },
    {
      title: 'Road Safety Campaign Launch',
      subtitle: 'Safety',
      date: '18/1/2024'
    },
    {
      title: 'New Tender Floated for Bridge Construction',
      subtitle: 'Tenders',
      date: '16/1/2024'
    },
    {
      title: 'Drainage System Maintenance Update',
      subtitle: 'Infrastructure',
      date: '14/1/2024'
    },
    {
      title: 'Public Consultation for Metro Corridor',
      subtitle: 'Planning',
      date: '12/1/2024'
    }
  ];

  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '80px 24px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '60px'
        }}>
          <Title level={2} style={{ 
            color: '#333',
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
            Latest News & Updates
          </Title>
          <Paragraph style={{
            fontSize: '16px',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Stay informed about the latest developments, policies, and initiatives from PWD 
            Delhi.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]}>
          {/* Important Information Section */}
          <Col xs={24} lg={14}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <Title level={3} style={{ 
                color: '#333',
                fontSize: '24px',
                fontWeight: '600',
                margin: 0
              }}>
                Important Information
              </Title>
              <Button 
                type="link" 
                style={{ 
                  color: '#1890ff',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                View All
              </Button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {importantInformation.map((item) => (
                <Card
                  key={item.id}
                  style={{
                    borderLeft: `4px solid ${item.badgeColor}`,
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                  }}
                  bodyStyle={{ padding: '20px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                    <div style={{ marginTop: '4px' }}>
                      {item.icon}
                    </div>
                    
                    <div style={{ flex: 1 }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '8px'
                      }}>
                        <Badge 
                          count={item.badge}
                          style={{
                            backgroundColor: item.badgeColor,
                            fontSize: '11px'
                          }}
                        />
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '12px',
                          color: '#999'
                        }}>
                          <CalendarOutlined />
                          <Text style={{ color: '#999', fontSize: '12px' }}>
                            {item.date}
                          </Text>
                        </div>
                      </div>

                      <Title level={5} style={{
                        color: '#333',
                        fontSize: '16px',
                        fontWeight: '600',
                        marginBottom: '8px',
                        lineHeight: '1.4'
                      }}>
                        {item.title}
                      </Title>

                      <Paragraph style={{
                        color: '#666',
                        fontSize: '14px',
                        lineHeight: '1.5',
                        marginBottom: '12px'
                      }}>
                        {item.description}
                      </Paragraph>

                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}>
                        <Badge 
                          color={item.categoryColor}
                          text={item.category}
                          style={{ fontSize: '12px' }}
                        />

                        <div style={{ display: 'flex', gap: '12px' }}>
                          {item.hasVisitPortal && (
                            <Button 
                              type="link" 
                              size="small"
                              style={{ 
                                color: '#52c41a',
                                fontSize: '12px',
                                padding: '0'
                              }}
                              icon={<LinkOutlined />}
                            >
                              Visit Portal
                            </Button>
                          )}
                          {item.hasReadMore && (
                            <Button 
                              type="link" 
                              size="small"
                              style={{ 
                                color: '#1890ff',
                                fontSize: '12px',
                                padding: '0'
                              }}
                              icon={<EyeOutlined />}
                            >
                              Read More
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Col>

          {/* Recent Updates Section */}
          <Col xs={24} lg={10}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '24px'
            }}>
              <Title level={3} style={{ 
                color: '#333',
                fontSize: '24px',
                fontWeight: '600',
                margin: 0
              }}>
                Recent Updates
              </Title>
            </div>

            <Card style={{
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
            }}>
              <List
                dataSource={recentUpdates}
                renderItem={(item, index) => (
                  <List.Item style={{ padding: '16px 0', border: 'none' }}>
                    <div style={{ width: '100%' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start'
                      }}>
                        <div style={{ flex: 1 }}>
                          <Text style={{
                            color: '#333',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '1.4',
                            display: 'block',
                            marginBottom: '4px'
                          }}>
                            {item.title}
                          </Text>
                          <Text style={{
                            color: '#999',
                            fontSize: '12px'
                          }}>
                            {item.subtitle}
                          </Text>
                        </div>
                        <Text style={{
                          color: '#999',
                          fontSize: '12px',
                          whiteSpace: 'nowrap',
                          marginLeft: '16px'
                        }}>
                          {item.date}
                        </Text>
                      </div>
                      {index < recentUpdates.length - 1 && (
                        <Divider style={{ margin: '16px 0 0 0' }} />
                      )}
                    </div>
                  </List.Item>
                )}
              />
              
              <div style={{ textAlign: 'center', marginTop: '16px', paddingTop: '16px', borderTop: '1px solid #f0f0f0' }}>
                <Button 
                  type="link" 
                  style={{ 
                    color: '#1890ff',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  View All Updates
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LatestUpdates;