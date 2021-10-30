import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555"
  },
  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16
  }
}))

function RightBar() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup max={6} style={{marginBottom:20}}>
        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/6.jpg" />
        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/7.jpg" />
        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/8.jpg" />
      </AvatarGroup>

      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>

      <ImageList cols={2} rowHeight={120} style={{marginBottom: 20}}>

        <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format&dpr=2"
              loading="lazy"
            />
        </ImageListItem>
        <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format&dpr=2"
              loading="lazy"
            />
        </ImageListItem>
        <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format&dpr=2"
              loading="lazy"
            />
        </ImageListItem>
        <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format&dpr=2"
              loading="lazy"
            />
        </ImageListItem>
        <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format&dpr=2"
              loading="lazy"
            />
        </ImageListItem>
        <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format&dpr=2"
              loading="lazy"
            />
        </ImageListItem>

      </ImageList>

      <Typography className={classes.title} gutterBottom>
        Categories
      </Typography>
      <Link href="#" className={classes.link} variant="body2">Sport</Link>
      <Link href="#" className={classes.link} variant="body2">Food</Link>
      <Link href="#" className={classes.link} variant="body2">Movies</Link>
      <Link href="#" className={classes.link} variant="body2">Music</Link>
      <Divider flexItem style={{marginBottom:6}}/>
      <Link href="#" className={classes.link} variant="body2">Science</Link>
      <Link href="#" className={classes.link} variant="body2">Technologies</Link>

    </Container>
  );
}

export default RightBar;
