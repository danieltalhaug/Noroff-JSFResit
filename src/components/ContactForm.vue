<template>
        <form action="#" @submit.prevent="$emit('verify')">

            <div class="field">
                <label class="label has-text-info">{{ nameLabel }}</label>
                <div class="control has-text-left">
                    <input  v-model="userNameInput"
                            v-on:keyup="sendNameInput"
                            class="input is-info"
                            v-bind:class="{ 'is-success': nameSuccess, 'is-danger': nameRequired }" 
                            type="text" 
                            :placeholder="nameLabel">
                    <p v-if="nameRequired" class="help is-danger">Required</p>
                    <p v-if="nameRequired" class="help is-danger">{{ nameErrorText }}</p>
                </div>
                
            </div>

            <div class="field">
                <label class="label has-text-info">{{ numberLabel }}</label>
                <div class="control has-text-left">
                    <input  v-model="userPhoneInput"
                            v-on:keyup="sendNumberInput"
                            class="input is-info"
                            v-bind:class="{ 'is-success': numberSuccess, 'is-danger': numberRequired }"
                            type="text"
                            placeholder="Text input">
                    <p v-if="numberRequired" class="help is-danger">Required</p>
                    <p v-if="numberRequired" class="help is-danger">{{ numberErrorText }}</p>
                </div>
                
            </div>

            <div class="field">
                <label class="label has-text-info">{{ subjectLabel }}</label>
                <div class="control has-text-left">
                    <div class="select is-info" v-bind:class="{ 'is-success': subjectSuccess, 'is-danger': subjectRequired }">
                    <select v-model="userSubjectInput" v-on:click="sendSubjectInput">
                        <option v-for="(option, index) in subjectOptions" v-bind:key="index">{{ option }}</option>
                    </select>
                    </div>
                    <p v-if="subjectRequired" class="help is-danger">Required</p>
                    <p v-if="subjectRequired" class="help is-danger">{{ subjectErrorText }}</p>
                </div>
            </div>

            <div class="field">
                <label class="label has-text-info">{{ messageLabel }}</label>
                <div class="control has-text-left">
                    <textarea   v-model="userMessageInput"
                                v-on:keyup="sendMessageInput"
                                class="textarea is-info"
                                v-bind:class="{ 'is-success': messageSuccess, 'is-danger': messageRequired }"
                                :placeholder="messageLabel"
                                maxlength="1000"
                                >
                    </textarea>
                    <p v-if="messageRequired" class="help is-danger">Required</p>
                    <p v-if="messageRequired" class="help is-danger">{{ messageErrorText }}</p>
                </div>
            </div>

            <div class="field is-pulled-right">
                <div class="control">
                    <button class="button is-medium is-info">Submit</button>
                </div>
            </div>

        </form>
</template>
<script>

export default {
    name: 'ContactForm',
    props: [
        'nameInput',
        'nameLabel',
        'nameSuccess',
        'nameRequired',
        'nameErrorText',
        'numberLabel',
        'numberSuccess',
        'numberRequired',
        'numberErrorText',
        'subjectLabel',
        'subjectSuccess',
        'subjectRequired',
        'subjectErrorText',
        'subjectOptions',
        'messageLabel',
        'messageSuccess',
        'messageRequired',
        'messageErrorText',
        'verify'
        ],
    data() {
        return {
            userNameInput: "",
            userPhoneInput: null,
            userSubjectInput: null,
            userMessageInput: "",
        }
    },
    methods: {
        sendNameInput: function() {
            this.$emit('getNameInput', this.userNameInput);
        },
        sendNumberInput: function() {
            this.$emit('getNumberInput', this.userPhoneInput);
        },
        sendSubjectInput: function() {
            this.$emit('getSubjectInput', this.userSubjectInput);
        },
        sendMessageInput: function() {
            this.$emit('getMessageInput', this.userMessageInput);
        }
    }
}
</script>

<style lang="scss" scoped>
// Import scss variables
@import "./../scss/variables.scss";
// scss
form {
    margin: 1.5rem 3rem 0 3rem;
}
textarea {
    resize: none;
    height: 14rem;
}
select {
    width: 600px !important;
}
</style>
