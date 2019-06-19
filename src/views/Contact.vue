<template>
    <main class="container">
        <section class="section columns">
            <Title  v-bind:title="this.header.title"
                    v-bind:subTitle="this.header.subTitle"
                    />
        </section>
        <section class="columns">
            <div class="column box">
                <div class="banner banner__background banner__background--pokemon"></div>
            </div>
            <div v-if="form.success" class="column box center">
                <div class="title-container center-item">
                    <h3 class="title has-text-info">{{ this.formSent.title }}</h3>
                    <h4 class="subtitle">{{ this.formSent.subTitle }}</h4>
                </div>
            </div>
            <div v-else class="column box">
                <ContactForm    
                                v-on:getNameInput="setNameInputValue"
                                v-bind:nameLabel="this.form.name.label"
                                v-bind:nameSuccess="this.form.name.success"
                                v-bind:nameRequired="this.form.name.required"
                                v-bind:nameErrorText="this.form.name.errorText"

                                v-on:getNumberInput="setNumberInputValue"
                                v-bind:numberLabel="this.form.number.label"
                                v-bind:numberSuccess="this.form.number.success"
                                v-bind:numberRequired="this.form.number.required"
                                v-bind:numberErrorText="this.form.number.errorText"

                                v-on:getSubjectInput="setSubjectInputValue"
                                v-bind:subjectLabel="this.form.subject.label"
                                v-bind:subjectSuccess="this.form.subject.success"
                                v-bind:subjectRequired="this.form.subject.required"
                                v-bind:subjectErrorText="this.form.subject.errorText"
                                v-bind:subjectOptions="this.form.subject.options"

                                v-on:getMessageInput="setMessageInputValue"
                                v-bind:messageLabel="this.form.message.label"
                                v-bind:messageSuccess="this.form.message.success"
                                v-bind:messageRequired="this.form.message.required"
                                v-bind:messageErrorText="this.form.message.errorText"

                                v-on:verify="validateForm"
                                />
            </div>
        </section>
    </main>
</template>
<script>
// Imports
import Title from './../components/Title.vue'
import ContactForm from './../components/ContactForm.vue'

export default {
    name: 'Contact',
    components: {
        ContactForm,
        Title
    },
    data() {
        return {
            header: {
                title: 'Contact us',
                subTitle: 'Send us a message, compliment, enquiry or complaint. We\'ll be happy to hear from you!'
            },
            formSent: {
                title: 'Form sent!',
                subTitle: 'We appreciate you getting in touch with us and we\'ll get back to you soon'
            },
            form: {
                success: false,
                name: {
                    input: "",
                    label: 'Name',
                    success: false,
                    required: false,
                    errorText: 'Please enter your name'
                },
                number: {
                    input: "",
                    label: 'Number',
                    success: false,
                    required: false,
                    errorText: 'Please enter a valid phone number, for example: 123-45-678'
                },
                subject: {
                    input: "",
                    label: 'Subject',
                    success: false,
                    required: false,
                    errorText: 'Please select an option',
                    options: [
                        'General Message',
                        'Compliment',
                        'Enquiry',
                        'Complaint'
                    ]
                },
                message: {
                    input: "",
                    label: 'Message',
                    success: false,
                    required: false,
                    errorText: 'Please enter your message'
                }
            }
        }
    },
    methods: {
        setNameInputValue (value) {
            this.form.name.input = value;
        },
        setNumberInputValue (value) {
            this.form.number.input = value;
        },
        setSubjectInputValue (value) {
            this.form.subject.input = value;
        },
        setMessageInputValue (value) {
            this.form.message.input = value;
        },
        verifyName: function() {
            if(!this.form.name.input) {
                this.form.name.required = true;
                this.form.name.success = false;
            } else {
                const nameRegex = /^[a-zA-Z ,.'-]{2,}$/;
                const testResult = nameRegex.test(this.form.name.input);
                if(!testResult) {
                    this.form.name.required = true;
                    this.form.name.success = false;
                } else {
                    this.form.name.required = false;
                    this.form.name.success = true;
                }
            }
        },
        verifyPhone: function() {
            if(!this.form.number.input) {
                this.form.number.required = true;
                this.form.number.success = false;
            } else {
                const nameRegex = /^\d{3}-\d{2}-\d{3}$/;
                const testResult = nameRegex.test(this.form.number.input);
                if(!testResult) {
                    this.form.number.required = true;
                    this.form.number.success = false;
                } else {
                    this.form.number.required = false;
                    this.form.number.success = true;
                }
            }
        },
        verifySubject: function() {
            if(!this.form.subject.input) {
                this.form.subject.required = true;
                this.form.subject.success = false;
            } else {
                this.form.subject.required = false;
                this.form.subject.success = true;
            }
        },
        verifyMessage: function() {
            if(!this.form.message.input) {
                this.form.message.required = true;
                this.form.message.success = false;
            } else {
                this.form.message.required = false;
                this.form.message.success = true;
            }
        },
        validateForm: function() {
            if((!this.form.name.success)||(!this.form.number.success)||(!this.form.subject.success)||(!this.form.message.success)) {
                this.verifyName();
                this.verifyPhone();
                this.verifySubject();
                this.verifyMessage();
            } else {
                this.form.success = true;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
// Import scss variables
@import "./../scss/variables.scss";
// scss
.box {
    margin: .3rem !important;
    padding: 0 !important;
    overflow: hidden;
    min-height: 600px;
}
.banner {
    &__background {
        background-color: #eee;
        min-height: 600px;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        &--pokemon {
            background-image: url('./../assets/pkmnimage.jpg');
        }
    }
}
.form-container
.title-container {
    padding-top: 0;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  &-item {
      max-width: 50%;
  }
}
</style>
