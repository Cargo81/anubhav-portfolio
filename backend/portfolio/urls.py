from django.urls import path
from .views import ContactCreateView, TestimonialListAPIView, BlogPostListAPIView, BlogPostDetailAPIView

urlpatterns = [
    path('contact/', ContactCreateView.as_view(), name='contact'),
    path(
        "testimonials/",
        TestimonialListAPIView.as_view(),
        name="testimonial-list"
    ),
    
    path("blog/", BlogPostListAPIView.as_view(), name="blog-list"),

path(
    "blog/<slug:slug>/",
    BlogPostDetailAPIView.as_view(),
    name="blog-detail",
),
]