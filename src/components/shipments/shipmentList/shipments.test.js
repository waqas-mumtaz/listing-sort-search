import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ShipmentList from './shipments';
import ShipmentListItems from './shipmentListItems';
import Pagination from './pagination';
import LoadingIndicator from '../../UI/LoadingIndicator';

configure({adapter: new Adapter()});

describe('<ShipmentList />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ShipmentList />);
    });

    it('should be defined', () => {
        expect(wrapper).toBeDefined();
      });

      it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });

    it('should render <ShipmentListItems /> if data is fetched', () => {
        wrapper.setProps({dataFetched: true});
        expect(wrapper.find(ShipmentListItems)).toHaveLength(1);
    });

    it('should not render <ShipmentListItems /> if data is not fetched', () => {
        wrapper.setProps({dataFetched: false});
        expect(wrapper.find(ShipmentListItems)).toHaveLength(0);
    });

    it('should render <Pagination /> 2 times if data is fetched', () => {
        wrapper.setProps({dataFetched: true});
        expect(wrapper.find(Pagination)).toHaveLength(2);
    });

    it('should render <LoadingIndicator /> if data is not fetched', () => {
        wrapper.setProps({dataFetched: false});
        expect(wrapper.find(LoadingIndicator)).toHaveLength(1);
    });
});