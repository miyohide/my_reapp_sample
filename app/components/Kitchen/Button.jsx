import React from "react";
import StaticView from "reapp-ui/helpers/StaticView";
import BackButton from "components/shared/BackButton";
import Title from "reapp-ui/components/Title";
import { Container, Block } from "reapp-ui/components/Grid";
import Button from "reapp-ui/components/Button";
import ButtonGroup from "reapp-ui/components/ButtonGroup";
import Modal from "reapp-ui/components/Modal";
import DemoViewMixin from "mixins/DemoViewMixin";

export default StaticView({
    mixins: [
        DemoViewMixin
    ],

    statics: {
        title: [BackButton, "Buttons"]
    },

    getInitialState() {
        return {
            modal: false
        };
    },

    toggleAlert() {
        this.setState({ modal: true });
    },

    buttonStyles: {
        red: {
            self: {
                background: "#d24420",
                color: "#fff",
                borderColor: "#d24420"
            }
        },
        green: {
            self: {
                background: "#3dd253",
                color: "#fff",
                borderColor: "#3dd253"
            }
        },
        blue: {
            self: {
                background: "#2f4cd2",
                color: "#fff",
                borderColor: "#2f4cd2"
            }
        }
    },

    render() {
        return (
            <div>
                {this.state.modal &&
                    <Modal
                        title="Button pressed"
                        onClose={() => this.setState({ modal: false })}>
                        Try dragging this view from the left edge to go back!
                    </Modal>
                    }

                <Title>Buttons</Title>
                <Container wrap>
                    <Button onTap={this.toggleAlert} filled>Active</Button>
                    <Button onTap={this.toggleAlert}>Button</Button>
                    <Button onTap={this.toggleAlert} rounded>Rounded</Button>
                </Container>
            </div>
        );
    }
});
