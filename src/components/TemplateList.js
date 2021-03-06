import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});

export class TemplateList extends React.Component {
    constructor() {
        super()
        this.state = {
            templates: [
                {
                    name: "template 1", value: `<body style="margin: 0; padding: 0;">
                <table border="1" cellpadding="0" cellspacing="0" width="100%">
                 <tr>
                  <td>
                  <table border="1" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                   <td width="260" valign="top">
                    <table border="1" cellpadding="0" cellspacing="0" width="100%">
                     <tr>
                      <td>
                       <img src="images/left.gif" alt="" width="100%" height="140" style="display: block;" />
                      </td>
                     </tr>
                     <tr>
                      <td style="padding: 25px 0 0 0;">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.
                      </td>
                     </tr>
                    </table>
                   </td>
                   <td style="font-size: 0; line-height: 0;" width="20">
                    &nbsp;
                   </td>
                   <td width="260" valign="top">
                    <table border="1" cellpadding="0" cellspacing="0" width="100%">
                     <tr>
                      <td>
                       <img src="images/right.gif" alt="" width="100%" height="140" style="display: block;" />
                      </td>
                     </tr>
                     <tr>
                      <td style="padding: 25px 0 0 0;">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.
                      </td>
                     </tr>
                    </table>
                   </td>
                  </tr>
                 </table>
                  </td>
                 </tr>
                </table>
               </body>`
                },
                { name: "template 2", value: "Template de email 2" },
                { name: "template 3", value: "Template de email 3" },
                { name: "template 4", value: "Template de email 4" }
            ],
            value: {}
        }
        this.onChange = this.onChange.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.removeFromList = this.removeFromList.bind(this)
    }

    onChange(e) {
        this.setState({
            value: e
        })

    }

    sendMessage() {
        window.parent.postMessage(this.state.value.value, this.props.parentOrigin);
        window.parent.postMessage('close', this.props.parentOrigin);
    }

    removeFromList() {
        let newList = []
        for (let i = 0; i < this.state.templates.length; i++) {
            if (this.state.templates[i].value != this.state.value.value) {
                newList.push(this.state.templates[i])
            }
        }
        this.setState({
            templates: newList,
            value: {}
        })
    }

    render() {
        const { classes } = this.props;

        return <div className={classes.root}>
            <List component="nav">

                {this.state.templates.map((template, i) => {
                    return (
                        <React.Fragment key={i}>
                            <ListItem
                                button
                                selected={template.value == this.state.value.value}
                                onClick={event => this.onChange(template)}
                            >
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary={template.name} />
                            </ListItem>
                        </React.Fragment>
                    )
                })}
            </List>
            <Divider />
            <List component="nav">
                <ListItem button onClick={this.sendMessage}>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Use this template" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add new template" />
                </ListItem>
                <ListItem button onClick={this.removeFromList}>
                    <ListItemIcon aria-label="Delete">
                        <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Remove Selected Template" />
                </ListItem>
            </List>
        </div>
    }
}

TemplateList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemplateList);