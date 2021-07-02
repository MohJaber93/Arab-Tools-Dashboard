import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper, InfoWindow, Polyline, Polygon } from 'google-maps-react';
const polygon = [
    { lat: 21.2105052, lng: 72.8653491 },
    { lat: 21.2206445, lng: 72.8704506 },
    { lat: 21.2183091, lng: 72.8631228 }
];
const GoogleMap = (props) => {
    let autocomplete;
    const [data, setData] = useState({
        activeMarker: {},
        selectedPlace: {},
        showingInfoWindow: false,
        position: null
    });
    const onMarkerClick = (props, marker) => setData({ ...data, activeMarker: marker, selectedPlace: props, showingInfoWindow: true });
    const onInfoWindowClose = () => setData({ ...data, activeMarker: null, showingInfoWindow: false });
    const onMapClicked = () => {
        if (data.showingInfoWindow)
            setData({ ...data, activeMarker: null, showingInfoWindow: false });
    };
    const renderAutoComplete = useCallback(() => {
        const { google, map } = props;
        if (!google || !map)
            return;
        const autocomplete_ = new google.maps.places.Autocomplete(autocomplete);
        autocomplete_.bindTo('bounds', map);
        autocomplete_.addListener('place_changed', () => {
            const place = autocomplete_.getPlace();
            if (!place.geometry)
                return;
            if (place.geometry.viewport)
                map.fitBounds(place.geometry.viewport);
            else {
                map.setCenter(place.geometry.location);
                map.setZoom(17);
            }
            setData({ ...data, position: place.geometry.location });
        });
    }, [autocomplete, data, props]);
    useEffect(() => {
        renderAutoComplete();
    }, [props.map, renderAutoComplete]);
    const onSubmit = (e) => {
        e.preventDefault();
    };
    const { position } = data;
    return (<>
            <Row>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Basic</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '300px', width: '100%' }}>
                                <Map centerAroundCurrentLocation className="map" google={props.google} zoom={14}/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Simple Markers</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '300px', width: '100%' }}>
                                <Map centerAroundCurrentLocation google={props.google} className="map" zoom={13}>
                                    <Marker name="Codedthemes" position={{ lat: 21.2335163, lng: 72.8643298 }}/>

                                    <Marker name="Roman Point" position={{ lat: 21.2148165, lng: 72.8627243 }}/>

                                    <Marker />
                                </Map>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Click-Able Markers</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '300px', width: '100%' }}>
                                <Map centerAroundCurrentLocation className="map" google={props.google} onClick={onMapClicked} zoom={12}>
                                    <Marker name="Codedthemes" position={{ lat: 21.2335163, lng: 72.8643298 }} onClick={onMarkerClick}/>

                                    <Marker name="Roman Point" position={{ lat: 21.2148165, lng: 72.8627243 }} onClick={onMarkerClick}/>

                                    <Marker name="Current Location" onClick={onMarkerClick}/>

                                    <InfoWindow marker={data.activeMarker} onClose={onInfoWindowClose} visible={data.showingInfoWindow}>
                                        <div>
                                            <h3>{data.selectedPlace.name}</h3>
                                        </div>
                                    </InfoWindow>
                                </Map>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Geo-Coding</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={onSubmit}>
                                <InputGroup className="mb-3">
                                    <Form.Control ref={(ref) => (autocomplete = ref)} type="text" placeholder="Search your favorite place"/>
                                    <InputGroup.Append>
                                        <Button type="submit">Search</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form>
                            <div style={{ height: '240px', width: '100%' }}>
                                <Map className="map" {...props} center={position} centerAroundCurrentLocation>
                                    <Marker position={position}/>
                                </Map>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Polygon</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '300px', width: '100%' }}>
                                <Map centerAroundCurrentLocation google={props.google} className="map" zoom={14}>
                                    <Polygon fillColor="#dc3545" fillOpacity={0.35} paths={[polygon]} strokeColor="#dc3545" strokeOpacity={0.8} strokeWeight={2}/>
                                </Map>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Polyline</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div style={{ height: '300px', width: '100%' }}>
                                <Map centerAroundCurrentLocation google={props.google} className="map" zoom={14}>
                                    <Polyline fillColor="#dc3545" fillOpacity={0.35} path={polygon} strokeColor="#dc3545" strokeOpacity={0.8} strokeWeight={5}/>
                                </Map>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>);
};
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk'
})(GoogleMap);
