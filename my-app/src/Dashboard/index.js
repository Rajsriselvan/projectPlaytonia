import React, { Component } from 'react';
import { Card, Layout, Pagination, Row, Col, Tooltip } from 'antd';
import 'antd/dist/antd.css'
import Data from './data.json'

const { Content } = Layout;

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventTarget: 1
        }
    }
    Paginator(items, page, per_page) {
        var page = page || 1,
            per_page = per_page || 5,
            offset = (page - 1) * per_page,
            paginatedItems = items.slice(offset).slice(0, per_page),
            total_pages = Math.ceil(items.length / per_page);
        return {
            page: page,
            per_page: per_page,
            pre_page: page - 1 ? page - 1 : null,
            next_page: (total_pages > page) ? page + 1 : null,
            total: items.length,
            total_pages: total_pages,
            data: paginatedItems
        };
    }
    handlePage(target) {
        this.setState({ eventTarget: target })
    }
    render() {
        var { eventTarget } = this.state
        var parsedData = this.Paginator(Data, eventTarget)

        return (
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <h1>Dashboard Data</h1>
                <Layout>
                    <Content>
                        <div style={{ background: '#ECECEC', padding: '30px' }}>
                            {parsedData.data && parsedData.data.map(item => (
                                <Row gutter={24}>
                                    <Col span={8}>
                                        <Tooltip title={item.title}>
                                            <span><Card
                                                title={item.title}
                                                style={{ borderRadius: '8px' }}
                                                bordered={false}>
                                                <p><b>CardID:</b> {item.id}</p>
                                                <p><b>UserID:</b> {item.userId}</p>
                                                <p><b>Description:</b> {item.body}</p>
                                            </Card></span>
                                        </Tooltip>
                                        <pre></pre>
                                    </Col>
                                </Row>
                            )
                            )}
                            <Pagination defaultCurrent={1} defaultPageSize={5} total={100}
                                onChange={target => this.handlePage(target)}
                            />
                        </div>
                    </Content>
                </Layout>
                <div>
                </div>
            </div>
        )
    }
} export default Dashboard;