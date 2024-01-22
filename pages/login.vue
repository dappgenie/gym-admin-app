<script setup lang="ts">
const router = useRouter()
const handleFormSubmission=(item:any)=>{
  const myObject = ref({});
  myObject.value=item

// Check if the object is empty
const isObjectEmpty = () => {
  return Object.keys(myObject.value).length === 0;                                   
}
console.log('lllllll',isObjectEmpty())
router.push('/dashboard')
}
</script>

<template>
  <div
    class="max-h-[100vh] h-[100vh] relative z-11   overflow-y-hidden w-screen flex justify-center items-center">
    <div class="inner z-10 bg-[#97F6A6]">
      <div class="main-div">
        <div class="text-end absolute top-8 right-8">
          <DarkToggle name="login toggle button" id="login toggle button" />
        </div>
        <div class="w-22 h-auto m-auto flex justify-center text-center">

        </div>
        <p class="font-bold text-center text-lg">Please Login</p>
        <LoginForm id="admin-login-form" name="admin-login-form" @form-data="handleFormSubmission($event)" />
      </div>

    </div>
  </div>
</template>

<style scoped>
.main-div {
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @apply  relative py-[5rem] z-[1] rounded-lg w-[25rem] m-auto p-9;
}

.inner {
  @apply block relative;
}

.eclipse-shape {
  @apply -bottom-[3.125rem] -left-[4.375rem] w-[8vw] -z-[1] absolute;
}
</style>
