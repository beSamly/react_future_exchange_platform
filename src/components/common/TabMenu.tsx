import React, { useState, useMemo, useCallback } from 'react';
import styled, { css } from 'styled-components';

interface PropsType {
    menu: Array<string>;
    components: Array<React.ReactNode>;
    tabWidth?: number | string;
    tabHeight?: number;
    reloadComponent?: boolean;
    menuHeight?: number;
}
export default function TabMenu({
    menu,
    components,
    tabWidth = 108,
    tabHeight = 45,
    reloadComponent = false,
    menuHeight = undefined,
}: PropsType) {
    const [currentTab, setCurrentTab] = useState(0);

    // const [contentsRef, setContentsRef] = useState({});
    // // const contentsRef = {};

    // const setRef = useCallback((node) => {
    //   if (node !== null) {
    //     setContentsRef((prevDOMRefs) => ({
    //       ...prevDOMRefs,
    //       [node.dataset.refkey]: node,
    //     }));
    //   }
    // }, []);

    const handleClick = (i) => () => {
        // Object.keys(contentsRef).forEach((key, index) => {
        //   contentsRef[key].style.display = index === i ? 'block' : 'none';
        // });

        // currentTab !== i && setCurrentTab(i);
        setCurrentTab(i);
    };

    const tabStyle = useMemo(
        () => ({
            width: tabWidth,
            height: tabHeight,
            lineHeight: `${tabHeight}px`,
        }),
        [],
    );

    const tabWrapperStyle = useMemo(
        () => ({
            height: menuHeight || 'auto',
        }),
        [],
    );

    return (
        <TabWrapper style={tabWrapperStyle}>
            <TabHeader>
                {menu.map((m, i) => (
                    <TabHeaderItem key={i} onClick={handleClick(i)} isCurrent={currentTab === i} style={tabStyle}>
                        {m}
                    </TabHeaderItem>
                ))}
            </TabHeader>
            {reloadComponent === true ? (
                <TabContent isCurrent={true}>{components[currentTab]}</TabContent>
            ) : (
                components.map((component, index) => (
                    <TabContent key={index} isCurrent={currentTab === index}>
                        {component}
                    </TabContent>
                ))
            )}
        </TabWrapper>
    );
}
const TabHeader = styled.div`
    display: flex;
    white-space: nowrap;
`;
const TabHeaderItem = styled.div<{ isCurrent: boolean }>`
    border-bottom: 1px solid #5461bd;
    text-align: center;
    cursor: pointer;
    ${({ isCurrent }) =>
        isCurrent
            ? css`
                  color: #5461bd;
                  font-weight: 700;
                  background-color: #e6e6ee;
                  border-bottom: 4px solid #5461bd;
              `
            : css`
                  &:hover {
                      font-weight: 700;
                  }
              `}
`;
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
const TabWrapper = styled.div`
    overflow: hidden;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
`;
