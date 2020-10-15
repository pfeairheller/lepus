package com.lepus.bridge.model;

import com.google.gson.annotations.SerializedName;

public class Issue extends BaseModel {
    @SerializedName("comment")public String comment;
    @SerializedName("formats") Format[] formats;
    @SerializedName("credentials~attach") CredentialAttach[] offers;

    static public class Format {
        @SerializedName("attach_id")
        String attachID;
        @SerializedName("format")
        String format;
    }

    static public class CredentialAttach {
        @SerializedName("@id")public String id;
        @SerializedName("mime-type") public String mimeType;
        @SerializedName("data") public Data data;
    }
}
