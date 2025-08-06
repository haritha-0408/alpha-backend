const express = require('express');
const app = express();
const PORT = 3000;

const mockProfile = {
    companyName: 'Gridnet Fusion',
    location: 'San Francisco, CA',
    industry: 'Artificial Intelligence',
    status: 'Open',
    regulation: 'Reg D',
    kycStatus: 'Verified',
    lastViewed: '3 days ago',
    dealType: 'Equity',
    roundSize: '$4M',
    roundName: 'Series A',
    minInvestment: '$25,000',
    maxInvestment: '$45M',
    valuation: '$2.8M',
    ebitdaMargin: '-15.3%',
    companyDescription: 'TechFusion AI is revolutionizing how enterprises automate their workflows using advanced AI. Our proprietary algorithms analyze business processes and implement optimization strategies, reducing operational costs by 37%.',
    exitStrategy: 'Acquisition by major tech company within 5–7 years or IPO if revenue exceeds $50M ARR.',
    dealDetails: {
        fundraisingProgress: 65,
        raised: '$2.6M',
        target: '$4.0M',
        maxInvestment: '$75,000',
        securityType: 'Preferred Shares',
        minInvestment: '$25,000',
        lockUpPeriod: '18 months'
    },
    team: [
        {
            id: '1',
            name: 'Sarah Chen',
            title: 'CEO & Co-Founder',
            avatar: '/team/sarah.jpg',
            status: 'Connected'
        },
        {
            id: '2',
            name: 'Michael Rodriguez',
            title: 'CTO & Co-Founder',
            avatar: '/team/michael.jpg',
            status: 'Pending'
        },
        {
            id: '3',
            name: 'Priya Patel',
            title: 'CFO',
            avatar: '/team/priya.jpg',
            status: 'Connect'
        }
    ],
    growthMetrics: [
        {
            label: 'Monthly Revenue',
            value: '$290K',
            change: '+18% MoM',
            trend: 'up',
            chartData: [200, 220, 240, 260, 275, 290]
        },
        {
            label: 'Active Users',
            value: '12,500',
            change: '+25% QoQ',
            trend: 'up'
        },
        {
            label: 'Enterprise Customers',
            value: '45',
            change: '92% Retention Rate',
            trend: 'up'
        }
    ],
    newsUpdates: [
        {
            id: '1',
            title: 'Partners with Fortune 500',
            description: 'TechFusion AI announces strategic partnership with Fortune 500 supply chain leader.',
            date: '2 weeks ago',
            link: '#'
        },
        {
            id: '2',
            title: 'Named "Top Starter"',
            description: 'Tech review recognized Gridnet as a top startup for enterprise automation.',
            date: '2 weeks ago',
            link: '#'
        }
    ],
    alphaIQInsights: {
        alphaIQMatchScore: 82,
        aiConfidenceScore: 82,
        maxScore: 100,
        summary: 'TechFusion AI shows strong product-market fit but faces burn rate and competition risks.',
        strengths: ['Strong team', 'Proprietary algorithms', 'Great traction'],
        weaknesses: ['High burn rate'],
        opportunities: ['Healthcare AI expansion', 'White-label partnerships'],
        threats: ['Well-funded competitors', 'Regulatory challenges']
    }
};

app.get('/api/profile/:id', (req, res) => {
    res.json(mockProfile);
});

app.listen(PORT, () => {
    console.log(`✅ Server running at http://localhost:${PORT}`);
});