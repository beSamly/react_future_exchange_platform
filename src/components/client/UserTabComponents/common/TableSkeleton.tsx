import Skeleton from '@material-ui/lab/Skeleton';
import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@material-ui/core';

interface PropsType {
    style: Record<string, any>;
}

const TableSkeleton = ({ style }: PropsType) => {
    return (
        <Grid container alignItems="center" justify="center" style={style}>
            <CircularProgress />
        </Grid>
    );

    // return new Array(8).fill(1).map((key, i) => (
    //   <tbody key={i}>
    //     {keys.map((key, i) => (
    //       <td key={key}>
    //         <Skeleton
    //           animation="wave"
    //           width={"80%"}
    //           height={40}
    //           style={{ margin: "auto" }}
    //         />
    //       </td>
    //     ))}
    //   </tbody>
    // ));
};

export default TableSkeleton;
