import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { TAB_CLICKED } from '../../../../states/reducers/orderReducer';
import { SET_OPERATING_HOUR } from '../../../../states/reducers/userReducer';

const OrderTabMenu = ({ menu, components, tabWidth, tabHeight, currentTabProp }) => {
    const [currentTab, setCurrentTab] = useState();

    const [contentsRef, setContentsRef] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        setCurrentTab(currentTabProp);
    }, [currentTabProp]);

    const handleClick = (i) => () => {
        // Method 1
        // Object.keys(contentsRef).forEach((key, index) => {
        //   contentsRef[key].style.display = index === i ? "block" : "none";
        // });
        currentTab !== i && dispatch(TAB_CLICKED({ index: i }));
        // currentTab !== i && setCurrentTab(i);
    };

    const tabStyle = useMemo(
        () => ({
            width: tabWidth,
            height: tabHeight,
            lineHeight: `${tabHeight}px`,
        }),
        [],
    );

    return (
        <TapWrapper>
            <TapHeader>
                {menu.map((m, i) => (
                    <TapMenu
                        key={i}
                        onClick={handleClick(i)}
                        style={tabStyle}
                        isCurrent={currentTab === i}
                        data-key="fuck"
                    >
                        {m}
                    </TapMenu>
                ))}
            </TapHeader>
            {components.map((component, index) => (
                <TabContent key={index} isCurrent={currentTab === index}>
                    {component}
                </TabContent>
            ))}
        </TapWrapper>
    );
};

OrderTabMenu.defaultProps = {
    menu: [],
    components: [],
    currentTabProp: 0,
    tabWidth: 150, //Please reset this value if needed.
    tabHeight: 300, //Please reset this value if needed.
};

export default React.memo(OrderTabMenu);
const TapHeader = styled.div``;
const TabContent = styled.div<{ isCurrent: boolean }>`
    ${({ isCurrent }) =>
        isCurrent
            ? css`
                  display: block;
              `
            : css`
                  display: none;
              `}
`;
const TapMenu = styled.div<{ isCurrent: boolean }>`
    cursor: pointer;
    text-align: center;
    border-bottom: 2px solid #e9ebf7;
    ${({ isCurrent }) =>
        isCurrent
            ? css`
                  font-weight: 700;
                  color: #5461bd;
                  background-color: #e9ebf7;
                  border-bottom: 4px solid #5461bd;
              `
            : css`
                  &:hover {
                      font-weight: 700;
                  }
              `}
`;
const TapContent = styled.div``;
const TapWrapper = styled.div`
    border: 1px solid #e3e3e3;
    border-radius: 6px;

    ${TapHeader} {
        display: flex;
        white-space: nowrap;
    }
`;
