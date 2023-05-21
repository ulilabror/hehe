export default {
    props: {
      type: Object
    },
    data() {
      return {
        picked: false
      };
    },
    template: `
      <label class="radio bt-2">
        <input
          type="radio"
          name="typepkg"
          :value="type.package"
          v-model="picked"
          @click="$emit('picked', type.package)"
        />
        <span> {{type.nama}}</span>
      </label>
    `
  };
  