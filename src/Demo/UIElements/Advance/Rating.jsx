import * as React from 'react';
import { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Rating from 'react-rating';
const AdvanceRating = () => {
    const [data, setData] = useState({
        blockRating: 7,
        movieRating: 1,
        squareRating: 3,
        pillRating: 4,
        reverseRating: 2,
        horizontalRating: 3,
        featherRating: 2,
        fractionalRating: 4.25
    });
    const movieRate = ['Bad', 'Mediocre', 'Good', 'Awesome'];
    const reverseRate = ['Strongly Agree', 'Agree', 'Neither Agree or Disagree', 'Disagree', 'Strongly Disagree'];
    return (<>
            <Row>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">1/10 Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-block'</code> with component <code>Rating</code> to see default rating.
                            </Card.Text>
                            <Rating stop={10} initialRating={data.blockRating} emptySymbol={<span className="theme-bar-block">
                                        <span />
                                    </span>} fullSymbol={<span className="theme-bar-block">
                                        <span className="active"/>
                                    </span>} onChange={(rate) => setData({ ...data, blockRating: rate })} onHover={(rate) => {
            const blockRatinggDom = document.getElementById('block-rating');
            if (blockRatinggDom) {
                blockRatinggDom.innerHTML = `${rate || data.blockRating}`;
            }
        }}/>
                            <span id="block-rating" className="current-rating-block">
                                {data.blockRating}
                            </span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Pill Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-pill'</code> with component <code>Rating</code> to see pill rating.
                            </Card.Text>
                            <div className="pill-rating">
                                <Rating stop={6} initialRating={data.pillRating} emptySymbol={['A', 'B', 'C', 'D', 'E', 'F'].map((n) => (<span className="theme-bar-pill">
                                            <span>{n}</span>
                                        </span>))} fullSymbol={['A', 'B', 'C', 'D', 'E', 'F'].map((n) => (<span className="theme-bar-pill">
                                            <span className="active">{n}</span>
                                        </span>))} onChange={(rate) => setData({ ...data, pillRating: rate })}/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Square Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-square'</code> with component <code>Rating</code> to see square rating.
                            </Card.Text>
                            <Rating initialRating={data.squareRating} emptySymbol={[1, 2, 3, 4, 5].map((n) => (<span className="theme-bar-square">
                                        <span>{n}</span>
                                    </span>))} fullSymbol={[1, 2, 3, 4, 5].map((n) => (<span className="theme-bar-square">
                                        <span className="active">{n}</span>
                                    </span>))} onChange={(rate) => setData({ ...data, squareRating: rate })}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Font Awesome Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use font-awesome icons in <code>emptySymbol</code> and <code>fullSymbol</code> with component{' '}
                                <code>Rating</code> to see font awesome rating.
                            </Card.Text>
                            <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x"/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Feather Icon Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use feather icons in <code>emptySymbol</code> and <code>fullSymbol</code> with component <code>Rating</code>{' '}
                                to see feather rating.
                            </Card.Text>
                            <Rating initialRating={data.featherRating} emptySymbol={<span className="text-dark">
                                        <i className="feather icon-circle fa-2x"/>
                                    </span>} fullSymbol={<span className="text-warning">
                                        <i className="feather icon-target fa-2x"/>
                                    </span>} onChange={(rate) => setData({ ...data, featherRating: rate })}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Fractional Star Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>fractions</code> with component <code>Rating</code> to see fractions rating.
                            </Card.Text>
                            <div className="text-warning">
                                <Rating stop={10} initialRating={data.fractionalRating} emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" fractions={4} onChange={(rate) => setData({ ...data, fractionalRating: rate })} onHover={(rate) => {
            const fractionalRatingDom = document.getElementById('fractional-rating');
            if (fractionalRatingDom) {
                fractionalRatingDom.innerHTML = `${rate || data.fractionalRating}`;
            }
        }}/>
                            </div>
                            <Card.Text>
                                Your Rating is : <span id="fractional-rating">{data.fractionalRating}</span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Movie Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-movie'</code> with component <code>Rating</code> to see movie rating.
                            </Card.Text>
                            <Rating stop={4} initialRating={data.movieRating} emptySymbol={<span className="theme-bar-movie">
                                        <span />
                                    </span>} fullSymbol={<span className="theme-bar-movie">
                                        <span className="active"/>
                                    </span>} onChange={(rate) => setData({ ...data, movieRating: rate })} onHover={(rate) => {
            const movingRatingDom = document.getElementById('movie-rating');
            if (movingRatingDom)
                movingRatingDom.innerHTML = `${movieRate[rate - 1] || movieRate[data.movieRating - 1]}`;
        }}/>
                            <div id="movie-rating" className="current-rating-movie">
                                {movieRate[data.movieRating - 1]}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Reverse Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-reverse'</code> with component <code>Rating</code> to see reverse rating.
                            </Card.Text>
                            <div className="reverse-rating">
                                <Rating initialRating={data.reverseRating} emptySymbol={<span className="theme-bar-reverse">
                                            <span />
                                        </span>} fullSymbol={<span className="theme-bar-reverse">
                                            <span className="active"/>
                                        </span>} onChange={(rate) => setData({ ...data, reverseRating: rate })} onHover={(rate) => {
            const reverseRatingDom = document.getElementById('reverse-rating');
            if (reverseRatingDom)
                reverseRatingDom.innerHTML = `${reverseRate[rate - 1] || reverseRate[data.reverseRating - 1]}`;
        }}/>
                            </div>
                            <div id="reverse-rating" className="current-rating-reverse">
                                {reverseRate[data.reverseRating - 1]}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Horizontal Rating</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Use <code>className='theme-bar-horizontal'</code> with component <code>Rating</code> to see horizontal
                                rating.
                            </Card.Text>
                            <div className="horizontal-rating">
                                <Rating stop={10} initialRating={data.horizontalRating} emptySymbol={<span className="theme-bar-horizontal">
                                            <span />
                                        </span>} fullSymbol={<span className="theme-bar-horizontal">
                                            <span className="active"/>
                                        </span>} onChange={(rate) => setData({ ...data, horizontalRating: rate })} onHover={(rate) => {
            const horizontalRatingDom = document.getElementById('horizontal-rating');
            if (horizontalRatingDom)
                horizontalRatingDom.innerHTML = `${rate || data.horizontalRating}`;
        }}/>
                            </div>
                            <div id="horizontal-rating" className="current-rating-horizontal">
                                {data.horizontalRating}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default AdvanceRating;
