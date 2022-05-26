from django.contrib import admin

from .models import Question, PhoneRequest, Application, Comment

admin.site.register(Application)
admin.site.register(Question)
admin.site.register(Comment)
admin.site.register(PhoneRequest)


