import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import RetweetIcon from '@material-ui/icons/Repeat';
import ReplyIcon from '@material-ui/icons/Reply';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Img from 'images/paella.jpg';
import Button from 'material-ui/Button';
// import styled from 'styled-components';

const styles = theme => ({
  button: {
    // margin: theme.spacing.unit,
    fontSize: '12px',
    padding: '5px 10px',
    minHeight:'auto',
    minWidth: 'auto',
    textTransform: 'capitalize',
    background: '#009688',
    top:'-43px',
    left:'70%'
  },
  card: {
    maxWidth: 400,
    margin:'10px'
  },
  
  header: {
    paddingBottom: 0
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class IgHashtag extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(){
    super();
    this.state = {
      expanded: false
    }
  }
  
  
  handleExpandClick = () => {
      this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              
              <IconButton>
                <MoreVertIcon />
              </IconButton>
              
            }
            subheader="Sept 14, 2016"
            title="Shrimp"
            className={classes.header}
          />
          <Button variant="raised" color="primary" className={classes.button}>
            Assign
          </Button>
          <CardMedia
            className={classes.media}
            image={Img}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with
              your guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Retweet">
              <RetweetIcon />
            </IconButton>
            <IconButton aria-label="reply">
              <ReplyIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="View Post"
            >
             <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body2">
                Method:
              </Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
              </Typography>
              
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

IgHashtag.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IgHashtag);
