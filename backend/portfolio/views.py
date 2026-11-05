from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Contact, Testimonial, BlogPost
from .serializers import ContactSerializer, TestimonialSerializer, BlogPostSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [AllowAny]
    
class TestimonialListAPIView(generics.ListAPIView):

    serializer_class = TestimonialSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return Testimonial.objects.filter(
            is_approved=True,
            is_active=True
        ).order_by("-created_at")
        

class BlogPostListAPIView(generics.ListAPIView):

    serializer_class = BlogPostSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return BlogPost.objects.filter(
            is_published=True
        ).order_by("-published_at", "-created_at")


class BlogPostDetailAPIView(generics.RetrieveAPIView):

    serializer_class = BlogPostSerializer
    permission_classes = [AllowAny]

    lookup_field = "slug"

    def get_queryset(self):
        return BlogPost.objects.filter(
            is_published=True
        )
