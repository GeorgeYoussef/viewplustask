<template>
  <div class="con_of_tab_payment con_custom_form">
    <form action="#" class="custom-form">
      <div class="row">
        <div class="col-12 mt-4">
          <button type="button" class="btn btn_white_shadows px-2">
            Reset <span>&times;</span>
          </button>
        </div>
      </div>
      <div class="con_sec_form_2 cards_style_each my-3">
        <h2 class="pl-3">Payment Method</h2>
        <div class="row">
          <div class="col-12">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="cardNumber"
                id="cardNumber"
              />
              <label for="cardNumber" class="animated-label"
                >Card Number*</label
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
                name="expiryDate"
                id="expiryDate"
              />
              <label for="expiryDate" class="animated-label"
                >Expiry Date*</label
              >
            </div>
          </div>
          <div class="col-lg-3">
            <div class="form-group">
              <input type="text" class="form-control" name="cvv" id="cvv" />
              <label for="cvv" class="animated-label">CVV*</label>
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
  name: "Payment",
  data: function() {
    return {};
  },
};
</script>
