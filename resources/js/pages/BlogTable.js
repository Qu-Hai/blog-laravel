import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import BlogCard from "../components/Share/BlogCard/BlogCard";
import getAPI from "./../utils/getAPI";
import Container from "@material-ui/core/Container";
function BlogTable() {
    const [data, setData] = useState([]);
    useEffect(() => {
        getAPI("api/post", "GET").then(res => {
            setData(res.data);
        });
        console.log(data);
    }, [setData]);
    
    return (
        <div>
            <Container maxWidth="lg">
            <Grid container spacing={3}>
                {data.map((el, i) => (
                    <Grid item md={4} key={i}>
                        <BlogCard
                            title={el.title}
                            image={el.image}
                            description={el.description}
                        />
                    </Grid>
                ))}
            </Grid>
            </Container>
            
        </div>
    );
}

export default BlogTable;
