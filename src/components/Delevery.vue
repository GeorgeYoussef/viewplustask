<template>
  <div class="con_of_tab_delevery con_custom_form">
    <form action="#" class="custom-form">
      <div class="row">
        <div class="col-12 mt-4">
          <button
            type="button"
            class="btn btn_white_shadows px-2"
            @click="resetData()"
          >
            Reset <span>&times;</span>
          </button>
        </div>
      </div>
      <div class="con_sec_form_1 cards_style_each mt-3">
        <h2 class="pl-3">Billing Address</h2>
        <div class="con_form_data">
          <div class="row">
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="first_name"
                  id="bill_firstName"
                  v-model.trim="$v.bill_firstName.$model"
                  :class="{ 'is-invalid': validationStatus($v.bill_firstName) }"
                />
                <label for="bill_firstName" class="animated-label"
                  >First Name*</label
                >
                <div
                  v-if="!$v.bill_firstName.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                  <div class="invalid-feedback" v-if="!$v.bill_firstName.minLength">
                    This field at least {{$v.bill_firstName.$params.minLength.min}} letters.
                </div>

              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="last_name"
                  id="bill_lastName"
                  v-model.trim="$v.bill_lastName.$model"
                  :class="{ 'is-invalid': validationStatus($v.bill_lastName) }"
                />
                <label for="bill_lastName" class="animated-label"
                  >Last Name*</label
                >
                <div v-if="!$v.bill_lastName.required" class="invalid-feedback">
                  This field is required.
                </div>
                 <div class="invalid-feedback" v-if="!$v.bill_lastName.minLength">
                    This field at least {{$v.bill_lastName.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="billaddressLine1"
                  id="billaddressLine1"
                  v-model="$v.billaddressLine1.$model"
                  :class="{
                    'is-invalid': validationStatus($v.billaddressLine1),
                  }"
                />
                <label for="billaddressLine1" class="animated-label"
                  >Address Line 1*</label
                >
                <div
                  v-if="!$v.billaddressLine1.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                <div class="invalid-feedback" v-if="!$v.billaddressLine1.minLength">
                    This field at least {{$v.billaddressLine1.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="billaddressLine2"
                  id="billaddressLine2"
                  v-model="billaddressLine2"
                />
                <label for="billaddressLine2" class="animated-label"
                  >Address Line 2*</label
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="billcityDistrict"
                  id="billcityDistrict"
                  v-model.trim="$v.billcityDistrict.$model"
                  :class="{
                    'is-invalid': validationStatus($v.billcityDistrict),
                  }"
                />
                <label for="billcityDistrict" class="animated-label"
                  >City / District</label
                >
                <div
                  v-if="!$v.billcityDistrict.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                <div class="invalid-feedback" v-if="!$v.billcityDistrict.minLength">
                    This field at least {{$v.billcityDistrict.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="billprovinceState"
                  id="billprovinceState"
                  v-model.trim="$v.billprovinceState.$model"
                  :class="{
                    'is-invalid': validationStatus($v.billprovinceState),
                  }"
                />
                <label for="billprovinceState" class="animated-label"
                  >Province / State</label
                >
                <div
                  v-if="!$v.billprovinceState.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                <div class="invalid-feedback" v-if="!$v.billprovinceState.minLength">
                    This field at least {{$v.billprovinceState.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="billcountry"
                  id="billcountry"
                  v-model.trim="$v.billcountry.$model"
                  :class="{ 'is-invalid': validationStatus($v.billcountry) }"
                />
                <label for="billcountry" class="animated-label">Country</label>
                <div v-if="!$v.billcountry.required" class="invalid-feedback">
                  This field is required.
                </div>
                <div class="invalid-feedback" v-if="!$v.billcountry.minLength">
                    This field at least {{$v.billcountry.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="billpostalCode"
                  id="billpostalCode"
                  v-model.trim="$v.billpostalCode.$model"
                  :class="{ 'is-invalid': validationStatus($v.billpostalCode) }"
                />
                <label for="billpostalCode" class="animated-label"
                  >Postal Code</label
                >
                <div
                  v-if="!$v.billpostalCode.required"
                  class="invalid-feedback"
                >
                  This field is required a number.
                </div>
                <div class="invalid-feedback" v-if="!$v.billpostalCode.minLength">
                    This field at least {{$v.billpostalCode.$params.minLength.min}} numbers.
                </div>
                  <div class="invalid-feedback" v-if="!$v.billpostalCode.maxLength">
                    This field max {{$v.billpostalCode.$params.maxLength.max}} numbers.
                </div>
                  <!-- <div class="invalid-feedback" v-if="!$v.billpostalCode.numeric">
                    This field must be numbers only
                </div> -->
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="con_of_chipping_address_same my-3">
        <div class="row">
          <div class="col-12">
            <div class="custom-control custom-checkbox header_custom">
              <input
                type="checkbox"
                class="custom-control-input"
                id="chipping_address_same"
                name="chipping_address_same"
                v-on:click="IsHaveBillAddress($event)"
                checked="checked"
              />
              <label class="custom-control-label" for="chipping_address_same"
                >My shipping address is same as my billing address.</label
              >
              <div v-if="!$v.bill_firstName.required" class="invalid-feedback">
                This field is required.
              </div>
                <div class="invalid-feedback" v-if="!$v.bill_firstName.minLength">
                    This field at least {{$v.bill_firstName.$params.minLength.min}} letters.
                </div>
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="hasBillingAddress == true"
        class="con_sec_form_2 cards_style_each my-3"
      >
        <h2 class="pl-3">Shipping Address</h2>
        <div class="con_form_data">
          <div class="row">
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="shipping_firstName"
                  id="shipping_firstName"
                  v-model.trim="$v.shipping_firstName.$model"
                  :class="{
                    'is-invalid': validationStatus($v.shipping_firstName),
                  }"
                />
                <label for="shipping_firstName" class="animated-label"
                  >First Name*</label
                >
                <div
                  v-if="!$v.shipping_firstName.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                <div class="invalid-feedback" v-if="!$v.shipping_firstName.minLength">
                    This field at least {{$v.shipping_firstName.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="shipping_lastName"
                  id="shipping_lastName"
                  v-model.trim="$v.shipping_lastName.$model"
                  :class="{
                    'is-invalid': validationStatus($v.shipping_lastName),
                  }"
                />
                <label for="shipping_lastName" class="animated-label"
                  >Last Name*</label
                >
                <div
                  v-if="!$v.shipping_lastName.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                <div class="invalid-feedback" v-if="!$v.shipping_lastName.minLength">
                    This field at least {{$v.shipping_lastName.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="shippingaddressLine1"
                  id="shippingaddressLine1"
                  v-model="$v.shippingaddressLine1.$model"
                  :class="{
                    'is-invalid': validationStatus($v.shippingaddressLine1),
                  }"
                />
                <label for="shippingaddressLine1" class="animated-label"
                  >Address Line 1*</label
                >
                <div
                  v-if="!$v.shippingaddressLine1.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                <div class="invalid-feedback" v-if="!$v.shippingaddressLine1.minLength">
                    This field at least {{$v.shippingaddressLine1.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="shippingaddressLine2"
                  id="shippingaddressLine2"
                />
                <label for="shippingaddressLine2" class="animated-label"
                  >Address Line 2*</label
                >
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="shippingcityDistrict"
                  id="shippingcityDistrict"
                  v-model.trim="$v.shippingcityDistrict.$model"
                  :class="{
                    'is-invalid': validationStatus($v.shippingcityDistrict),
                  }"
                />
                <label for="shippingcityDistrict" class="animated-label"
                  >City / District</label
                >
                <div
                  v-if="!$v.shippingcityDistrict.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                <div class="invalid-feedback" v-if="!$v.shippingcityDistrict.minLength">
                    This field at least {{$v.shippingcityDistrict.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="shippingprovinceState"
                  id="shippingprovinceState"
                  v-model.trim="$v.shippingprovinceState.$model"
                  :class="{
                    'is-invalid': validationStatus($v.shippingprovinceState),
                  }"
                />
                <label for="shippingprovinceState" class="animated-label"
                  >Province / State</label
                >
                <div
                  v-if="!$v.shippingprovinceState.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                <div class="invalid-feedback" v-if="!$v.shippingprovinceState.minLength">
                    This field at least {{$v.shippingprovinceState.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="shippingcountry"
                  id="shippingcountry"
                  v-model.trim="$v.shippingcountry.$model"
                  :class="{
                    'is-invalid': validationStatus($v.shippingcountry),
                  }"
                />
                <label for="shippingcountry" class="animated-label"
                  >Country</label
                >
                <div
                  v-if="!$v.shippingcountry.required"
                  class="invalid-feedback"
                >
                  This field is required.
                </div>
                <div class="invalid-feedback" v-if="!$v.shippingcountry.minLength">
                    This field at least {{$v.shippingcountry.$params.minLength.min}} letters.
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="shippingpostalCode"
                  id="shippingpostalCode"
                  v-model.trim="$v.shippingpostalCode.$model"
                  :class="{
                    'is-invalid': validationStatus($v.shippingpostalCode),
                  }"
                />
                <label for="shippingpostalCode" class="animated-label"
                  >Postal Code</label
                >
                <div
                  v-if="!$v.shippingpostalCode.required"
                  class="invalid-feedback"
                >
                  This field is number required.
                </div>
                <div class="invalid-feedback" v-if="!$v.shippingpostalCode.minLength">
                    This field at least {{$v.shippingpostalCode.$params.minLength.min}} numbers.
                </div>
                <div class="invalid-feedback" v-if="!$v.shippingpostalCode.maxLength">
                    This field max {{$v.shippingpostalCode.$params.maxLength.max}} numbers.
                </div>
                <!-- <div class="invalid-feedback" v-if="!$v.shippingpostalCode.numeric">
                    This field must be numbers only
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="con_checkoutCase">
        <div
          class="custom-control custom-radio custom-control-inline header_custom"
        >
          <input
            type="radio"
            class="custom-control-input"
            id="createAccount"
            name="accountCheckout"
            checked
          />
          <label class="custom-control-label" for="createAccount"
            >Create Account</label
          >
        </div>
        <div
          class="custom-control custom-radio custom-control-inline header_custom"
        >
          <input
            type="radio"
            class="custom-control-input"
            id="checkoutAsGuest"
            name="accountCheckout"
          />
          <label class="custom-control-label" for="checkoutAsGuest"
            >Checkout as a Guest</label
          >
        </div>
      </div>
      <div class="con_sec_form_3 cards_style_each my-3">
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                v-model.trim="$v.email.$model"
                :class="{ 'is-invalid': validationStatus($v.email) }"
              />
              <label for="email" class="animated-label">Email*</label>
              <div v-if="!$v.email.required" class="invalid-feedback">
                The email field is required.
              </div>
              <div v-if="!$v.email.email" class="invalid-feedback">
                The email is not valid.
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3">
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="password"
                id="password"
                v-model.trim="$v.password.$model"
                :class="{ 'is-invalid': validationStatus($v.password) }"
              />
              <label for="password" class="animated-label">Password*</label>
              <div v-if="!$v.password.required" class="invalid-feedback">
                The password field is required.
              </div>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="confirmPassword"
                id="confirmPassword"
                v-model.trim="$v.confirmPassword.$model"
                :class="{ 'is-invalid': validationStatus($v.confirmPassword) }"
              />
              <label for="confirmPassword" class="animated-label"
                >Confirm Password*</label
              >
              <div
                v-if="!$v.confirmPassword.sameAsPassword"
                class="invalid-feedback"
              >
                Passwords must be identical.
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="priv_pass">
              Minimum eight characters, at least one uppercase letter, one
              lowercase letter, one number and one special character (@$!%*#?&)
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-right">
          <button type="buttin" class="btn btn-primary  mb-3 px-3" v-on:click.prevent="delevery">
            Next
            <i class="fas fa-angle-right mx-2"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";

import { required, email, minLength, maxLength, sameAs, numeric } from "vuelidate/lib/validators";
export default {
  name: "Delevery",
  data: function() {
    return {
      bill_firstName: "",
      bill_lastName: "",
      billaddressLine1: "",
      billaddressLine2: "",
      billcityDistrict: "",
      billprovinceState: "",
      billcountry: "",
      billpostalCode: "",

      chipping_address_same: "",
      hasBillingAddress: false,
      is_same_address: "0",

      shipping_firstName: "",
      shipping_lastName: "",
      shippingaddressLine1: "",
      shippingaddressLine2: "",
      shippingcityDistrict: "",
      shippingprovinceState: "",
      shippingcountry: "",
      shippingpostalCode: "",

      is_new_account: 0,
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  validations() {
    if (this.hasBillingAddress) {
      return {
        bill_firstName: { required, minLength: minLength(2), },
        bill_lastName: { required, minLength: minLength(2), },
        billaddressLine1: { required, minLength: minLength(2), },
        billcityDistrict: { required, minLength: minLength(2), },
        billprovinceState: { required, minLength: minLength(2), },
        billcountry: { required, minLength: minLength(2), },
        billpostalCode: { required, minLength: minLength(3), maxLength: maxLength(3), numeric	},

        shipping_firstName: { required, minLength: minLength(2), },
        shipping_lastName: { required, minLength: minLength(2), },
        shippingaddressLine1: { required, minLength: minLength(2), },
        shippingcityDistrict: { required, minLength: minLength(2), },
        shippingprovinceState: { required, minLength: minLength(2), },
        shippingcountry: { required, minLength: minLength(2), },
        shippingpostalCode: { required, minLength: minLength(3), maxLength: maxLength(3),numeric },

        email: { required, email },
        password: {
          required,
          minLength: minLength(8), // I assume you'd want something like this too
          strongPassword(password1) {
            return (
              /[a-z]/.test(password1) &&
              /[A-Z]/.test(password1) &&
              /[0-9]/.test(password1) &&
              /[#?!@$%^&*-]/.test(password1)
            );
          },
        },
        confirmPassword: {
          sameAsPassword: sameAs("password"),
        },
      };
    } else {
      return {
        bill_firstName: { required, minLength: minLength(2), },
        bill_lastName: { required, minLength: minLength(2), },
        billaddressLine1: { required, minLength: minLength(2), },
        billcityDistrict: { required, minLength: minLength(2), },
        billprovinceState: { required, minLength: minLength(2), },
        billcountry: { required, minLength: minLength(2), },
        billpostalCode: { required, minLength: minLength(3), maxLength: maxLength(3), numeric	},

        email: { required, email },
        password: {
          required,
          minLength: minLength(8), // I assume you'd want something like this too
          strongPassword(password1) {
            return (
              /[a-z]/.test(password1) &&
              /[A-Z]/.test(password1) &&
              /[0-9]/.test(password1) &&
              /[#?!@$%^&*-]/.test(password1)
            );
          },
        },
        confirmPassword: {
          sameAsPassword: sameAs("password"),
        },
      };
    }
  },

  methods: {
    resetData: function() {
      this.$v.$reset();

      this.bill_firstName = "";
      this.bill_lastName = "";
      this.billaddressLine1 = "";
      this.billaddressLine2 = "";
      this.billcityDistrict = "";
      this.billprovinceState = "";
      this.billcountry = "";
      this.billpostalCode = "";

      this.chipping_address_same = "";
      this.hasBillingAddress = false;

      this.shipping_firstName = "";
      this.shipping_lastName = "";
      this.shippingaddressLine1 = "";
      this.shippingaddressLine2 = "";
      this.shippingcityDistrict = "";
      this.shippingprovinceState = "";
      this.shippingcountry = "";
      this.shippingpostalCode = "";

      this.email = "";
      this.password = "";
      this.confirmPassword = "";

      $(".con_custom_form .form-control").val("");
    },

    validationStatus: function(validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },

    IsHaveBillAddress: function() {
      if (event.target.checked) {
        this.hasBillingAddress = false;
        this.is_same_address = "0";
      } else { 
        this.hasBillingAddress = true;
        this.is_same_address = "1";
      }
    },

    // submit: function() {

    // },

    delevery: function() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;


      this.$http
        .post("https://developetests.com/api/saveAddress", {
          first_name: this.bill_firstName,
          last_name: this.bill_lastName,
          address_1: this.billaddressLine1,
          address_2: this.billaddressLine2,
          city: this.billcityDistrict,
          state: this.billprovinceState,
          country: this.billcountry,
          postal_code: this.billpostalCode,
          is_same_address: this.is_same_address,

          shipping_first_name: this.shipping_firstName,
          shipping_last_name: this.shipping_lastName,
          shipping_address_1: this.shippingaddressLine1,
          shipping_address_2: this.shippingaddressLine2,
          shipping_city: this.shippingcityDistrict,
          shipping_state: this.shippingprovinceState,
          shipping_country: this.shippingcountry,
          shipping_postal_code: this.shippingpostalCode,

          is_new_account: this.is_new_account,
          email: this.email,
          password: this.password,
          password_confirmation:  this.confirmPassword,

        })
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    },
  },
};
</script>
