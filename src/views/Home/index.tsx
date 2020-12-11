import { defineComponent } from 'vue';
import './index.scss'
export default defineComponent({
  name: 'Home',
  setup() {
    return () => {
      return (
        <div class='home'>
          hello
        </div>
      )
    }
  }
})