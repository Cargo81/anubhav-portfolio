from rest_framework import serializers
from .models import Contact, Testimonial


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = [
            'id',
            'name',
            'email',
            'subject',
            'message',
            'created_at'
        ]
        read_only_fields = ['id', 'created_at']
        
        
class TestimonialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Testimonial

        fields = [
            "id",
            "name",
            "role",
            "company",
            "message",
            "rating",
            "avatar",
            "created_at",
        ]

        read_only_fields = fields
