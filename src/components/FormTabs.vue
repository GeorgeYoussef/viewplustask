<template>
  <div class="con_all_tabs">
    <div class="container_custom_Links">
      <ul class="tabs_container">
        <li
          @click="activeTab = '1'"
          :class="[activeTab === '1' ? 'active' : '']"
        >
          Delevery
        </li>
        <li
          @click="activeTab = '2'"
          :class="[activeTab === '2' ? 'active' : '']"
        >
          Shipping
        </li>
        <li
          @click="activeTab = '3'"
          :class="[activeTab === '3' ? 'active' : '']"
        >
          Payment
        </li>
        <hr />
      </ul>
    </div>
    <div class="container">
      <div class="tabs-content">
        <div class="content-one" v-if="activeTab === '1'">
          <Delevery />
        </div>
        <div class="content-two" v-if="activeTab === '2'">
            <Shipping />
        </div>
        <div class="content-three" v-if="activeTab === '3'">
          <Payment />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

import Delevery from "@/components/Delevery.vue";
import Shipping from "@/components/Shipping.vue";
import Payment from "@/components/Payment.vue";

export default {
  name: "FormTabs",
  components: {
    Delevery,
    Shipping, 
    Payment
  },
  mounted: function() {
    $(".con_custom_form .form-control").on("change", function() {
      if ($(this).val()) {
        $(this)
          .closest(".form-group")
          .find("label.animated-label")
          .addClass("have_txt");
      } else
        $(this)
          .closest(".form-group")
          .find("label.animated-label")
          .removeClass("have_txt");
    });
  },
  data: function() {
    return {
      activeTab: "1",
    };
  },
};
</script>

<style lang="scss">
.con_all_tabs {
  .container_custom_Links {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    .tabs_container {
      padding: 0;
      margin: 0 auto;
      max-width: 450px;
      li {
        height: 48px;
        padding: 0 10px;
        cursor: pointer;
        box-sizing: border-box;
        opacity: 0.6;
        width: 33.3%;
        text-align: center;
        @extend %inlineFlex_center_center;
        white-space: nowrap;
        vertical-align: top;
        text-decoration: none;
        position: relative;
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;

        &.active {
          opacity: 1;
          transition: all 0.5s ease-in;
        }
      }
      hr {
        height: 2px;
        width: 33.3%;
        margin: 0;
        background: $blue_color;
        border: none;
        margin-left: 0;
        transition: 500ms cubic-bezier(0.35, 0, 0.25, 1);
      }

      li:nth-child(2).active ~ hr {
        margin-left: 33.3%;
      }
      li:nth-child(3).active ~ hr {
        margin-left: 66.6%;
      }
    }
  }
  .tabs-content {
    max-width: 50rem;
    margin: auto;
  }
  .btn_white_shadows {
    @extend %button_box_shadow;
    @extend %inlineFlex_center_center;
    @extend %eachBtn_btn;

    span {
      font-size: 30px;
      line-height: 0;
      margin-left: 0.3rem;
    }
  }
  .con_custom_form {
    text-align: left;
    .custom-form {
      font-weight: 400;
      font-size: 14px;
      background: #fff;
      h2 {
        font-size: 1.2rem;
      }
      .btn-primary {
        background-color: $blue_color;
        border-color: $blue_color;
        @extend %inlineFlex_center_center;
        @extend %eachBtn_btn;
      }
      .form-group {
        position: relative;
        padding-top: 1rem;
        margin-bottom: 1.3rem;
        .invalid-feedback {
          position: absolute;
        }
        .animated-label {
          position: absolute;
          top: 20px;
          left: 0;
          bottom: 0;
          z-index: 2;
          width: 100%;
          font-weight: 300;
          opacity: 0.5;
          cursor: text;
          transition: 0.2s ease all;
          margin: 0;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          &.have_txt {
            top: 0;
            opacity: 1;
            color: $blue_color;
            font-size: 12px;
            &:after {
              visibility: visible;
              width: 100%;
              left: 0;
            }
          }

          &:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 45%;
            height: 2px;
            width: 10px;
            visibility: hidden;
            background-color: $blue_color;
            transition: 0.2s ease all;
          }
        }
        &.not-empty {
          .animated-label {
            top: 0;
            font-size: 12px;
          }
        }
        textarea {
          line-height: 1.2rem;
          font-size: 1rem;
        }
        .form-control {
          position: relative;
          z-index: 1;
          border-radius: 0;
          border-width: 0 0 1px;
          border-bottom-color: rgba(0, 0, 0, 0.25);
          height: auto;
          padding: 3px 0 5px;
          &:focus {
            box-shadow: none;
            border-bottom-color: rgba(0, 0, 0, 0.12);
            ~ .animated-label {
              top: 0;
              opacity: 1;
              color: $blue_color;
              font-size: 12px;
              &:after {
                visibility: visible;
                width: 100%;
                left: 0;
              }
            }
          }
        }
      }
    }
    .priv_pass {
      color: rgba(0, 0, 0, 0.6);
    }
  }
}
.con_custom_form .custom-control-input:checked ~ .custom-control-label::before,
.con_custom_form .custom-control-input:checked ~ .custom-control-label::before {
  border-color: #ff4081;
  background-color: #ff4081;
}
.header_custom.custom-control label {
  font-size: 1.2rem !important;
}
.header_custom .custom-control-label::before,
.header_custom .custom-control-label::after {
  width: 1.2rem !important;
  height: 1.2rem !important;
}
</style>
