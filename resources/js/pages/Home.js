import React, { useState, useEffect } from "react";
import CategoryBox from "./../components/User/CategoryBox/CategoryBox";
import SpecialPost from "./../components/User/SpecialPost/SpecialPost";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import RelatedTable from "./../components/User/RelatedTable/RelatedTable";
import Paper from "@material-ui/core/Paper";
import StyledDivider from "./../utils/StyledDivider";
import Categories from "./../components/User/Categories/Categories";
import getAPI from "./../utils/getAPI";
function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAPI("api/post", "GET").then(res => {
            setData(res.data);
        });
    }, [setData]);

    return (
        <div>
            <CategoryBox />

            <SpecialPost />

            <Paper style={{ marginTop: 50 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid item lg={8}>
                            <StyledDivider children="Related" />
                            <RelatedTable />
                        </Grid>
                        <Grid item lg={4}>
                            <StyledDivider children="Categories" />
                            <Categories />
                        </Grid>
                    </Grid>
                </Container>
            </Paper>
        </div>
    );
}

export default Home;
