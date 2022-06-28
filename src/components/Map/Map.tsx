import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City, Hotels } from '../../types/types';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  places: Hotels;
  selected?: number | undefined;
  city: City;
};

const defaultCustomIcon = new Icon({
  iconUrl: '/img/pin.svg',
  iconSize: [27, 40],
  iconAnchor: [13, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [27, 40],
  iconAnchor: [13, 40],
});

function Map(props: MapProps): JSX.Element {
  const { places, selected, city } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      places.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selected !== undefined && point.id === selected
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, places, selected]);

  return (
    <div
      style={{ height: '100%', maxWidth: '1144px', margin: 'auto' }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
