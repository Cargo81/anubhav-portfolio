from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import Contact, Testimonial
from .serializers import ContactSerializer, TestimonialSerializer

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