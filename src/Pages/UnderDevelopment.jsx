import React, { useState, useEffect } from 'react';
import { 
  Button, 
  Typography, 
  Space, 
  Card, 
  Progress,
  Row,
  Col,
  Timeline,
  Divider,
  notification
} from 'antd';
import { 
  ToolOutlined,
  RocketOutlined,
  ClockCircleOutlined,
  BellOutlined,
  HomeOutlined,
  MailOutlined,
  CheckCircleOutlined,
  LoadingOutlined,
  StarOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const UnderDevelopment = () => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [email, setEmail] = useState('');
  const [floatingElements, setFloatingElements] = useState([]);

  // Animated progress simulation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 75) return 75;
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Phase progression
  useEffect(() => {
    const phaseTimer = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(phaseTimer);
  }, []);

  // Floating elements animation
  useEffect(() => {
    const elements = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2
    }));
    setFloatingElements(elements);
  }, []);

  const developmentPhases = [
    {
      title: 'Planning & Design',
      description: 'Conceptualizing user experience and interface design',
      icon: <StarOutlined />,
      status: 'finish'
    },
    {
      title: 'Development',
      description: 'Building core functionality and features',
      icon: <ToolOutlined />,
      status: currentPhase >= 1 ? 'process' : 'wait'
    },
    {
      title: 'Testing',
      description: 'Quality assurance and performance optimization',
      icon: <CheckCircleOutlined />,
      status: currentPhase >= 2 ? 'process' : 'wait'
    },
    {
      title: 'Launch',
      description: 'Final deployment and go-live',
      icon: <RocketOutlined />,
      status: currentPhase >= 3 ? 'process' : 'wait'
    }
  ];

  const handleNotifyMe = () => {
    if (email) {
      notification.success({
        message: 'Notification Subscribed!',
        description: `We'll notify you at ${email} when this page is ready.`,
        icon: <BellOutlined style={{ color: '#52c41a' }} />
      });
      setEmail('');
    }
  };

  const handleGoHome = () => {
    console.log('Navigate to Home');
  };

  const handleContactUs = () => {
    console.log('Navigate to Contact');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      {/* Floating Background Elements */}
      {floatingElements.map(element => (
        <div
          key={element.id}
          style={{
            position: 'absolute',
            left: `${element.left}%`,
            width: '60px',
            height: '60px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            animation: `float ${element.duration}s ease-in-out infinite`,
            animationDelay: `${element.delay}s`,
            backdropFilter: 'blur(10px)'
          }}
        />
      ))}

      {/* Animated Background Shapes */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '50%',
        animation: 'pulse 4s ease-in-out infinite'
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '150px',
        height: '150px',
        background: 'rgba(255, 255, 255, 0.03)',
        borderRadius: '20px',
        animation: 'rotate 8s linear infinite'
      }} />

      {/* Main Content Container */}
      <div style={{
        maxWidth: '1500px',
        width: '100%',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Main Card */}
        <Card
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            border: 'none',
            animation: 'slideUp 1s ease-out',
            marginBottom: '30px'
          }}
          bodyStyle={{ padding: '40px' }}
        >
          {/* Animated Icon */}
          <div style={{
            fontSize: '80px',
            color: '#0846aa',
            marginBottom: '20px',
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            <ToolOutlined />
          </div>

          {/* Main Title */}
          <Title 
            level={1} 
            style={{ 
              color: '#2c3e50',
              marginBottom: '10px',
              fontSize: '3rem',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #0846aa, #667eea)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Under Development
          </Title>

          {/* Subtitle */}
          <Paragraph 
            style={{ 
              fontSize: '18px', 
              color: '#7f8c8d',
              marginBottom: '30px',
              lineHeight: '1.6'
            }}
          >
            We're working hard to bring you something amazing! This page is currently being crafted 
            with attention to detail to provide you with the best possible experience.
          </Paragraph>

          {/* Progress Section */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '10px'
            }}>
              <Text strong style={{ color: '#2c3e50', fontSize: '16px' }}>
                Development Progress
              </Text>
              <Text style={{ color: '#0846aa', fontSize: '20px', fontWeight: '600' }}>
                {progress}%
              </Text>
            </div>
            <Progress 
              percent={progress} 
              strokeColor={{
                '0%': '#0846aa',
                '50%': '#667eea',
                '100%': '#52c41a'
              }}
              strokeWidth={12}
              showInfo={false}
              style={{
                '.ant-progress-bg': {
                  borderRadius: '6px'
                }
              }}
            />
          </div>

          {/* Development Timeline */}
          <Row gutter={[24, 24]} style={{ marginBottom: '40px' }}>
            <Col span={24}>
              <Title level={3} style={{ color: '#2c3e50', marginBottom: '20px' }}>
                Development Roadmap
              </Title>
              <Timeline
                mode="horizontal"
                items={developmentPhases.map((phase, index) => ({
                  ...phase,
                  dot: phase.status === 'process' ? 
                    <LoadingOutlined style={{ fontSize: '16px', color: '#0846aa' }} /> : 
                    phase.icon,
                  color: phase.status === 'finish' ? '#52c41a' : 
                         phase.status === 'process' ? '#0846aa' : '#d9d9d9',
                  children: (
                    <div style={{
                      transform: currentPhase === index ? 'scale(1.05)' : 'scale(1)',
                      transition: 'all 0.3s ease',
                      padding: '10px'
                    }}>
                      <Text strong style={{ 
                        display: 'block', 
                        color: phase.status === 'process' ? '#0846aa' : '#666',
                        fontSize: '14px'
                      }}>
                        {phase.title}
                      </Text>
                      <Text style={{ 
                        fontSize: '12px', 
                        color: '#999',
                        display: 'block',
                        marginTop: '4px'
                      }}>
                        {phase.description}
                      </Text>
                    </div>
                  )
                }))}
              />
            </Col>
          </Row>

          <Divider style={{ margin: '40px 0' }} />

          {/* Notification Subscription */}
          <div style={{ marginBottom: '30px' }}>
            <Title level={4} style={{ color: '#2c3e50', marginBottom: '15px' }}>
              <BellOutlined style={{ marginRight: '8px', color: '#0846aa' }} />
              Get Notified When We Launch
            </Title>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '10px',
              flexWrap: 'wrap',
              maxWidth: '400px',
              margin: '0 auto'
            }}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  minWidth: '250px',
                  padding: '12px 16px',
                  border: '2px solid #e1e8ed',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#0846aa';
                  e.target.style.boxShadow = '0 0 0 3px rgba(8, 70, 170, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e1e8ed';
                  e.target.style.boxShadow = 'none';
                }}
              />
              <Button
                type="primary"
                icon={<BellOutlined />}
                onClick={handleNotifyMe}
                disabled={!email}
                style={{
                  backgroundColor: '#0846aa',
                  borderColor: '#0846aa',
                  height: '44px',
                  padding: '0 20px',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!e.target.disabled) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 6px 20px rgba(8, 70, 170, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Notify Me
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <Space size="large" wrap>
            <Button
              type="primary"
              size="large"
              icon={<HomeOutlined />}
              onClick={handleGoHome}
              style={{
                backgroundColor: '#0846aa',
                borderColor: '#0846aa',
                height: '50px',
                padding: '0 30px',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(8, 70, 170, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Go to Homepage
            </Button>
            
            <Button
              size="large"
              icon={<MailOutlined />}
              onClick={handleContactUs}
              style={{
                height: '50px',
                padding: '0 30px',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '8px',
                border: '2px solid #0846aa',
                color: '#0846aa',
                backgroundColor: 'transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#0846aa';
                e.target.style.color = 'white';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(8, 70, 170, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#0846aa';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Contact Support
            </Button>
          </Space>
        </Card>

        {/* Estimated Time */}
        <Card
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(15px)',
            borderRadius: '15px',
            border: 'none',
            animation: 'slideUp 1s ease-out 0.2s both'
          }}
          bodyStyle={{ padding: '20px' }}
        >
          <Space align="center">
            <ClockCircleOutlined style={{ fontSize: '24px', color: '#0846aa' }} />
            <div>
              <Text strong style={{ fontSize: '16px', color: '#2c3e50' }}>
                Estimated Launch: Q2 2025
              </Text>
              <br />
              <Text style={{ color: '#7f8c8d', fontSize: '14px' }}>
                We're working around the clock to deliver excellence
              </Text>
            </div>
          </Space>
        </Card>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .ant-progress-bg {
          border-radius: 6px !important;
        }

        @media (max-width: 768px) {
          .ant-timeline.ant-timeline-horizontal .ant-timeline-item {
            display: block !important;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default UnderDevelopment;