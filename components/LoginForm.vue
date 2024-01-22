<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'



const router = useRouter()
const INPUT_CLASS = 'h-11 dark:!text-white !border !shadow-none !ring-0 !border-border-100 dark:!border-border-900'
const types = ref(false)
const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase and One Special Case Character'
    )
})
type LoginSchema = z.output<typeof schema>

type LoginFormEmit = {
  (e: 'formData', value: LoginSchema): void
}

const emit = defineEmits<LoginFormEmit>()

const state = reactive({
  email: 'admin@d.com',
  password: 'admin@1Qww'
})

async function submit(event: FormSubmitEvent<LoginSchema>) {
  emit('formData', event.data)
}
</script>

<template>
  <div>
    <UForm :schema="schema" :state="state" @submit="submit">
      <UFormGroup label="Email" name="email" class="py-5 text-sm !text-start">
        <UInput :input-class="INPUT_CLASS" v-model="state.email" />
      </UFormGroup>
      <UFormGroup label="Password" name="password" class="relative pb-3 text-sm !text-start">
        <UInput :input-class="INPUT_CLASS" v-model="state.password" :type="types === true ? 'text' : 'password'" />
        <div class="absolute right-3 top-4 cursor-pointer" @click="types = !types">
          <UIcon v-if="types" name="i-heroicons-eye" class="w-5 h-5 text-black " />
          <UIcon v-if="!types" name="i-heroicons-eye-slash" class="w-5 h-5 text-black " />
        </div>
      </UFormGroup>
      <div class="underline cursor-pointer text-end py-2 mb-3" @click="router.push(`/forgot-password`)">
        Forgot Password
      </div>
      <UButton type="submit" block class="py-3" id="login-btn" name="login-btn" btn-type="PRIMARY" label="Login" />
    </UForm>
  </div>
</template>



<style></style>