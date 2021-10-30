import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: "250px",
    [theme.breakpoints.down("sm")]:{
      height: 150
    }
  },
  card: {
      marginBottom: theme.spacing(5)
  }
}))

function Post() {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia 
            className={classes.media} 
            image="https://images.pexels.com/photos/9441882/pexels-photo-9441882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            title="My Post" 
            />
            <CardContent>
                <Typography gutterBottom variant="h5">My Post</Typography>
                <Typography variant="body2">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit enim laborum aliquid distinctio fugit quisquam nam voluptatum veniam obcaecati voluptates nesciunt cumque eius incidunt labore, nulla deleniti. Repellat, illum molestias!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit enim laborum aliquid distinctio fugit quisquam nam voluptatum veniam obcaecati voluptates nesciunt cumque eius incidunt labore, nulla deleniti. Repellat, illum molestias!
                    </Typography>
            </CardContent>
        </CardActionArea>

        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
        </CardActions>
    </Card>
 
  )
}

export default Post;
