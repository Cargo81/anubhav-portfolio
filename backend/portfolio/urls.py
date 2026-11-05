from django.urls import path
from .views import ContactCreateView, TestimonialListAPIView

urlpatterns = [
    path('contact/', ContactCreateView.as_view(), name='contact'),
    path(
        "testimonials/",
        TestimonialListAPIView.as_view(),
        name="testimonial-list"
    ),
]