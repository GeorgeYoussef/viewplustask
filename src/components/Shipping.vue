<template>
  <div class="con_of_tab_shipping con_custom_form">
    <form action="#" class="custom-form">
      <div class="row">
        <div class="col-12 mt-4">
          <button type="button" class="btn btn_white_shadows px-2">
            Reset <span>&times;</span>
          </button>
        </div>
      </div>
      <div class="con_sec_form_2 cards_style_each my-3">
        <h2 class="pl-3">Shipping Address</h2>
        <div class="custom-control custom-radio header_custom">
          <input
            type="radio"
            class="custom-control-input"
            id="shippingMethodFree"
            name="shippingMethod"
          />
          <label class="custom-control-label" for="shippingMethodFree">
            <span> FREE Shipping: </span>
            get it by Wed, Jul 8 - Fri, Jul 10
          </label>
        </div>

        <div class="custom-control custom-radio header_custom">
          <input
            type="radio"
            class="custom-control-input"
            id="shippingMethodStandard"
            name="shippingMethod"
          />
          <label class="custom-control-label" for="shippingMethodStandard">
            <span> $5.99 Standard Shipping: </span>
            get it by Tue, Jul 7
          </label>
        </div>

        <div class="custom-control custom-radio header_custom">
          <input
            type="radio"
            class="custom-control-input"
            id="shippingMethodTwoDay"
            name="shippingMethod"
          />
          <label class="custom-control-label" for="shippingMethodTwoDay">
            <span> $8.99 Two-Day Shipping: </span>
            get it by Sun, Jul 5
          </label>
        </div>
      </div>
      <div class="con_of_item_is_gift">
        <div class="row">
          <div class="col-12">
            <div class="custom-control custom-checkbox header_custom">
              <input
                type="checkbox"
                class="custom-control-input"
                id="item_is_gift"
                name="item_is_gift"
              />
              <label class="custom-control-label" for="item_is_gift"
                >Item is a gift</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="con_sec_form_4 cards_style_each my-3">
        <div class="row">
          <div class="col-12">
            <h2 class="pl-3">Shipping Methods</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="includeGiftReceipt"
                name="includeGiftReceipt"
              />
              <label class="custom-control-label" for="includeGiftReceipt"
                >Include gift receipt</label
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="recipientName"
                id="recipientName"
              />
              <label for="recipientName" class="animated-label"
                >Recipient Name</label
              >
            </div>
          </div>
          <div class="col-12">
            <div class="form-group">
              <textarea
                type="text"
                class="form-control"
                name="customMessage"
                id="customMessage"
                rows="2"
              ></textarea>
              <label for="customMessage" class="animated-label"
                >Custom Message</label
              >
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="addGiftWrap"
                name="addGiftWrap"
              />
              <label class="custom-control-label" for="addGiftWrap"
                >Add gift wrap</label
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <button type="button" class="btn btn_white_shadows mb-3 px-3">
            <i class="fas fa-angle-left mx-2"></i>
            Back
          </button>
        </div>
        <div class="col-6 text-right">
          <button type="button" class="btn btn-primary mb-3 px-3 ">
            Next
            <i class="fas fa-angle-right mx-2"></i>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Shipping",
  data: function() {
    return {};
  },
};
</script>
