// Navigation handling
const sections = document.querySelectorAll('.section');
const navButtons = document.querySelectorAll('.nav-btn');

navButtons.forEach(btn => {
  btn.onclick = () => {
    const target = btn.dataset.section;
    sections.forEach(sec => {
      sec.classList.toggle('active', sec.id === target + '-section');
    });
  };
});

// Profile menu toggle
const profileIcon = document.getElementById('profileIcon');
const profileDropdown = document.getElementById('profileDropdown');

profileIcon.onclick = () => {
  profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
};

// Sign in/out buttons
const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

signInBtn.onclick = () => {
  alert('Signed in!');
  signInBtn.style.display = 'none';
  signOutBtn.style.display = 'block';
};
signOutBtn.onclick = () => {
  if (confirm('Sign out?')) {
    alert('Signed out!');
    signInBtn.style.display = 'block';
    signOutBtn.style.display = 'none';
  }
};

// Sections navigation with home icon
document.querySelectorAll('.home-icon').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById('home-section').classList.add('active');
  };
});

// Meal plan options
const mealOptions = document.querySelectorAll('.meal-option');
const mealPlanDetails = document.getElementById('mealPlanDetails');

mealOptions.forEach(btn => {
  btn.onclick = () => {
    const plan = btn.dataset.plan;
    mealPlanDetails.innerHTML = `<p>You selected: ${plan} plan.</p>`;
  };
});

// Workout options
const workoutOptions = document.querySelectorAll('.workout-option');
const workoutDetails = document.getElementById('workoutDetails');

workoutOptions.forEach(btn => {
  btn.onclick = () => {
    const type = btn.dataset.type;
    workoutDetails.innerHTML = `<p>You selected: ${type} workout plan.</p>`;
  };
});

// Wishlist buttons
document.querySelectorAll('.add-to-wishlist').forEach(btn => {
  btn.onclick = () => {
    const post = btn.dataset.post;
    alert(`Added "${post}" to wishlist!`);
  };
});
